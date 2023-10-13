/**
	АВТОМАТ УПРАВЛЕНИЯ ТВЕРДОТОПЛИВНЫМ КОТЛОМ ТЕПЛОДАР ОК-20
	Датчики:
		Т1 - DS18B20 до +125гр.С => контроль температуры "Улица".
		Т2 - DS18B20 до +125гр.С => контроль температуры "Комната".
		Т3 - DS18B20 до +125гр.С => контроль температуры "Подача".
		Т4 - DS18B20 до +125гр.С => контроль температуры "Обратка".
		Т5 - термопара К-типа (хромель-алюмель) до 999гр.С => контроль температуры дымовых газов.


*/

#include <avr/io.h>
#include <avr/iom32.h>
#include <avr/interrupt.h>
#include <util/delay.h>
#include <avr/pgmspace.h>
#include <avr/eeprom.h>
#include <string.h>
#include <stdio.h>
// #include <stdlib.h>
#include <stdint.h>

#include "../../_libs_macros/bits_macros.h"
#include "../../_lib_tft_ili9486/tft_ili9486.h"
#include "../../_fonts/fonts.h"

// F = 16 MHz

volatile uint8_t STATUS = 0;
#define ST_BLC      		0
#define ST_BTN      		1		//есть событие по кнопкам
#define ST_BTN_WAIT 		2		//антидребезг
#define ST_MENU     		3		//0 - работа, вывод на дисплей оперативных параметров 1 - режим меню
#define ST_WORK_PAUSE_HIGH	4		//Запрос на паузу верхняя дверца
#define ST_WORK_PAUSE_LOW	5		//Запрос на паузу нижняя дверца
#define ST_WORK_PAUSE_STOP	6		//Запрос на выход из паузы

volatile uint8_t BUTTON = 0;
#define MMM      0		//кнопка М
#define PLS      1		//кнопка +
#define MIN      2		//кнопка -

#define MUL_BTN_WAIT	10	//множитель на 16.4мкс антидребезг кнопок
volatile uint8_t CountMUL_BTN_WAIT = 0;

volatile uint8_t MENU = 0;	//текущая позиция меню (индекс. от 0 до 15 включительно)
#define MUL_MENU_WAIT	10	//множитель на ~1сек, ожидание выхода из меню
volatile uint8_t CountMUL_MENU_WAIT = 0;


volatile uint8_t DS_TempData[9];
volatile double dbDS_OUT;				//дачик Т1 "Улица"
volatile double dbDS_ROOM;				//дачик Т2 "Комната"
volatile double dbDS_SERVE;				//дачик Т3 "Подача"
volatile double dbDS_RETURN;			//дачик Т4 "Обратка"
volatile uint8_t STATUS_DS_OUT;
volatile uint8_t STATUS_DS_ROOM;
volatile uint8_t STATUS_DS_SERVE;
volatile uint8_t STATUS_DS_RETURN;
/**  Датчики Т1 - Т4
	STATUS_DS регистр состояния датчика DS18B20
	0 - неопределенное состояние (начальное) или ошибка
	1 - нормально, есть измеренное значение температуры в регистре DS_Temp (double)
*/
volatile uint8_t STATUS_TC = 0;
volatile uint16_t VALUE_TC = 0;
/**  Датчик Т5
	STATUS_TC регистр состояния датчика Т5 (термопара К-типа)
	0 - неопределенное состояние (начальное)
	1 - нормально, есть измеренное значение температуры => значение в градусах в регистре VALUE_TC1
	2 - обрыв датчика
	3 - превышение максимального значения (больше 999 Гр. по цельсию)
*/

volatile uint8_t BOILER_STATUS = 10;	//Регистр состояния котла
/**  
	0 - Неопределенное состояние
	1 - ОЖИДАНИЕ
		VALUE_TC <= SETVAL_TEMP_BOILER_OFF температура дымохода меньше температуры уставки отключения управления котла
			В этом режиме если установлен автоматический подогрев ТЭНами возможно включение ТЭНов когда
			DS_Temp4(обратка) <= EE_SETVAL_TEMP_TEN_ON и выключение ТЭНов когда DS_Temp4(обратка) >= SETVAL_TEMP_TEN_OFF
	2 - РАБОТА АВТОМАТ
	3 - ОСТАНОВЛЕН
	4 - ОШИБКА
		Состояние любого из датчиков TC, DS2, DS3, DS4 имеет ошибку или неисправен
	5 - ПАУЗА
	6 - РУЧНОЙ
*/
#define BOILER_STATUS_UNKNOWN		0
#define BOILER_STATUS_IDLE			1
#define BOILER_STATUS_AUTO			2
#define BOILER_STATUS_STOP_ROOM		3	//остановка по перегреву комнаты
#define BOILER_STATUS_STOP_COOLANT	4	//остановка по перегреву теплоносителя
#define BOILER_STATUS_ERROR			5
#define BOILER_STATUS_PAUSE			6
#define BOILER_STATUS_MANUAL		7

// volatile uint8_t *PORT_Reg;
volatile uint8_t *DDR_Reg;
volatile uint8_t *PIN_Reg;

volatile uint8_t FLAP_STATE = 0;		//текущее положение фаз (0 - 3)
volatile int16_t FLAP_STEPS = 0;		//текущее положение в шагах (0 - 250)
#define FLAP_STEP_MAX	250

#define time_flap	5
#define FLAP_INIT		3	//закрыть до нуля заслонку независимо от FLAP_STEPS
#define FLAP_START		2	//закрыть до нуля заслонку
#define FLAP_FORVARD	1	//открывать заслонку
#define FLAP_REVERCE	0	//закрывать заслонку

volatile uint16_t Count_PAUSE_SEC = 0;
volatile uint16_t EXTREMUM = 0;
#define DELTA_EXTREMUM	2
volatile int8_t ALARM_TRIGGER = 0;		//1 - взведенное положение разрешающее сигнализацию о прогорании дров
#define ALARM_TRIGGER_OFF		0
#define ALARM_TRIGGER_ON		1
volatile int8_t ERROR_ALARM_TRIGGER = 0;		//1 - взведенное положение разрешающее сигнализацию об ошибке датчиков
#define ERROR_ALARM_TRIGGER_OFF		0
#define ERROR_ALARM_TRIGGER_ON		1
//===============================================================================
// Сохраняемые уставки и переменные
// Индекс в МЕНЮ - 0
volatile uint8_t SETVAL_AUTO_CONTROL;			// Автоматическая регулировка / Ручная	
uint8_t EEMEM EE_SETVAL_AUTO_CONTROL = 1;		// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_AUTO_CONTROL_MAN	0			// Ручная регулировка
#define DEF_SETVAL_AUTO_CONTROL_AUTO	1		// Автоматическая регулировка
// Индекс в МЕНЮ - 1
volatile uint8_t SETVAL_FLAP_MANUAL_STEP;		// Количество шагов двигателя заслонки в ручном режиме	
uint8_t EEMEM EE_SETVAL_FLAP_MANUAL_STEP = 5;	// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_FLAP_MANUAL_STEP_MIN	1		//от
#define DEF_SETVAL_FLAP_MANUAL_STEP_MAX	25		//до
#define DEF_SETVAL_FLAP_MANUAL_STEP_STEP	1	//шаг
// Индекс в МЕНЮ - 2
volatile uint8_t SETVAL_SMOKE_DEAD_BAND;		// Зона нечувствительности датчика дымохода в каждую сторону (целые градусы)
uint8_t EEMEM EE_SETVAL_SMOKE_DEAD_BAND = 5;	// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_SMOKE_DEAD_BAND_MIN	1		//от
#define DEF_SETVAL_SMOKE_DEAD_BAND_MAX	20		//до
#define DEF_SETVAL_SMOKE_DEAD_BAND_STEP	1		//шаг
// Индекс в МЕНЮ - 3
volatile uint8_t SETVAL_FLAP_AUTO_STEP;			// Количество шагов двигателя заслонки в автоматическом режиме	
uint8_t EEMEM EE_SETVAL_FLAP_AUTO_STEP = 5;		// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_FLAP_AUTO_STEP_MIN	1		//от
#define DEF_SETVAL_FLAP_AUTO_STEP_MAX	25		//до
#define DEF_SETVAL_FLAP_AUTO_STEP_STEP	1		//шаг
// Индекс в МЕНЮ - 4
volatile uint8_t SETVAL_FLAP_START_STEPS;		// Стартовое положение заслонки в %	
uint8_t EEMEM EE_SETVAL_FLAP_START_STEPS = 30;	// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_FLAP_START_STEPS_MIN	5		//от
#define DEF_SETVAL_FLAP_START_STEPS_MAX	50		//до
#define DEF_SETVAL_FLAP_START_STEPS_STEP	1	//шаг
// Индекс в МЕНЮ - 5
volatile uint8_t SETVAL_TEMP_SMOKE;				// температура газов дымохода (целые градусы)
uint8_t EEMEM EE_SETVAL_TEMP_SMOKE = 230;		// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_TEMP_SMOKE_MIN	100			//от
#define DEF_SETVAL_TEMP_SMOKE_MAX	255			//до
#define DEF_SETVAL_TEMP_SMOKE_STEP	5			//шаг
// Индекс в МЕНЮ - 6
volatile uint8_t SETVAL_MAX_TEMP_SERVE;			// максимальная температура подачи (целые градусы)
uint8_t EEMEM EE_SETVAL_MAX_TEMP_SERVE = 80;	// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_MAX_TEMP_SERVE_MIN	40		//от
#define DEF_SETVAL_MAX_TEMP_SERVE_MAX	95		//до
#define DEF_SETVAL_MAX_TEMP_SERVE_STEP	1		//шаг
#define DEF_SETVAL_MAX_TEMP_SERVE_DELTA	10		//гистерезис максимальной температуры подачи (вниз)
// Индекс в МЕНЮ - 7
volatile uint8_t SETVAL_MAX_TEMP_ROOM;			// максимальная температура комнаты (целые градусы)	
uint8_t EEMEM EE_SETVAL_MAX_TEMP_ROOM = 22;		// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_MAX_TEMP_ROOM_MIN	15		//от
#define DEF_SETVAL_MAX_TEMP_ROOM_MAX	28		//до
#define DEF_SETVAL_MAX_TEMP_ROOM_STEP	1		//шаг
#define DEF_SETVAL_MAX_TEMP_ROOM_DELTA	2		//гистерезис максимальной температуры комнаты (вниз)
// Индекс в МЕНЮ - 8
volatile uint8_t SETVAL_TEMP_BOILER_OFF;		// Температура дымохода отключения управления котла (целые градусы)	
uint8_t EEMEM EE_SETVAL_TEMP_BOILER_OFF = 50;	// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_TEMP_BOILER_OFF_MIN	20		//от
#define DEF_SETVAL_TEMP_BOILER_OFF_MAX	70		//до
#define DEF_SETVAL_TEMP_BOILER_OFF_STEP	5		//шаг
// Индекс в МЕНЮ - 9
volatile uint8_t SETVAL_LIGHT_ALL_ON;			// Работа индикатора
uint8_t EEMEM EE_SETVAL_LIGHT_ALL_ON = 1;		// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_LIGHT_AUTO	0				// Включение по датчику присутствия / с кнопок
#define DEF_SETVAL_LIGHT_ALL_ON	1				// Всегда включен
// Индекс в МЕНЮ - 10
volatile uint8_t SETVAL_ALARM_FUEL_ON;			// Сигнализация прогорания топлива
uint8_t EEMEM EE_SETVAL_ALARM_FUEL_ON = 1;		// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_ALARM_FUEL_OFF	0			// Выключена
#define DEF_SETVAL_ALARM_FUEL_ON	1			// Включена
// Индекс в МЕНЮ - 11
volatile uint8_t SETVAL_TEMP_ALARM_FUEL;		// Температура сигнализации прогорания топлива (целые градусы)
uint8_t EEMEM EE_SETVAL_TEMP_ALARM_FUEL = 150;	// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_TEMP_ALARM_FUEL_MIN	80		//от
#define DEF_SETVAL_TEMP_ALARM_FUEL_MAX	150		//до
#define DEF_SETVAL_TEMP_ALARM_FUEL_STEP	5		//шаг
// Индекс в МЕНЮ - 12
volatile uint8_t SETVAL_AUTO_HEAT;				// Автоматический подогрев ТЕНами	
uint8_t EEMEM EE_SETVAL_AUTO_HEAT = 1;			// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_AUTO_HEAT_OFF	0			// Подогрев выключен
#define DEF_SETVAL_AUTO_HEAT_ON	1				// Автоматический подогрев включен
// Индекс в МЕНЮ - 13
volatile uint8_t SETVAL_TEMP_TEN_ON;			// температура включения ТЕНов аварийный подогрев (целые градусы)	Индекс в МЕНЮ - 13
uint8_t EEMEM EE_SETVAL_TEMP_TEN_ON = 10;		// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_TEMP_TEN_ON_MIN	5			//от
#define DEF_SETVAL_TEMP_TEN_ON_MAX	25			//до
#define DEF_SETVAL_TEMP_TEN_ON_STEP	1			//шаг
// Индекс в МЕНЮ - 14
volatile uint8_t SETVAL_TEMP_TEN_OFF;			// температура выключения ТЕНов аварийный подогрев (целые градусы)	Индекс в МЕНЮ - 14
uint8_t EEMEM EE_SETVAL_TEMP_TEN_OFF = 15;		// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_TEMP_TEN_OFF_MIN	6			//от
#define DEF_SETVAL_TEMP_TEN_OFF_MAX	30			//до
#define DEF_SETVAL_TEMP_TEN_OFF_STEP	1		//шаг
// Индекс в МЕНЮ - 15
volatile uint8_t SETVAL_DELAY_PAUSE;			// Задержка в регулировании в режиме рауза (целые минуты)	Индекс в МЕНЮ - 15
uint8_t EEMEM EE_SETVAL_DELAY_PAUSE = 3;		// начальное значение сохраненное в EEPROM
#define DEF_SETVAL_DELAY_PAUSE_MIN	1			//от
#define DEF_SETVAL_DELAY_PAUSE_MAX	10			//до
#define DEF_SETVAL_DELAY_PAUSE_STEP	1			//шаг
//===============================================================================
char* LabelUNC PROGMEM = "UNC";
char* LabelBRK PROGMEM = "-----";
char* LabelOVR PROGMEM = "OVER";
char* LabelERR PROGMEM = "ERROR";
//===============================================================================
#define DS18B20_SEARCH_ROM 		0xF0	//Поиск адресов всех устройств по спецалгоритму
#define DS18B20_READ_ROM 		0x33	//Считываение адреса единственного устройства
#define DS18B20_MATCH_ROM 		0x55	//Активация конкретного устройства по его адресу
#define DS18B20_SKIP_ROM 		0xCC	//Обращение к единственному на шине устройству без указания его адреса
#define DS18B20_ALARM_SEARCH 	0xEC	//Поиск устройств, у которых сработал ALARM (алгоритм поиска как у CMD_SERCH_ROM)
#define DS18B20_CONVERT_T 		0x44	//Старт преобразования температуры
#define DS18B20_W_SCRATCHPAD 	0x4E	//Запись во внутренний буфер (регистры)
#define DS18B20_R_SCRATCHPAD 	0xBE	//Чтение внутреннего буфера (регистров)
#define DS18B20_C_SCRATCHPAD 	0x48	//Сохранение регистров в EEPROM 
#define DS18B20_RECALL_EE 		0xB8	//Заносит в буфер из EEPROM значение порога ALARM
#define DS18B20_READ_POWER 		0xB4	//Определение, есть ли в шине устройства с паразитным питанием
#define DS18B20_RES_9BIT 		0x1F	//Разрешение датчика (9 бит)
#define DS18B20_RES_10BIT 		0x3F	//Разрешение датчика (10 бит)
#define DS18B20_RES_11BIT 		0x5F	//Разрешение датчика (11 бит)
#define DS18B20_RES_12BIT 		0x7F	//Разрешение датчика (12 бит)
#define CRC8INIT				0x00
#define CRC8POLY				0x18	//0X18 = X^8+X^5+X^4+X^0
//===============================================================================
// BOARD
//===============================================================================
// Кнопки
#define PORT_PLS PORTB
#define DDR_PLS DDRB
#define PIN_PLS PINB
#define B_PLS 0

#define PORT_MIN PORTA
#define DDR_MIN DDRA
#define PIN_MIN PINA
#define B_MIN 0

// м/с управления шаговым двигателем заслонки(FLAP) TLE4729G
#define PORT_FLAP_FH PORTA
#define DDR_FLAP_FH DDRA
#define PIN_FLAP_FH PINA
#define B_FLAP_FH 2

#define PORT_FLAP_FVR PORTB
#define DDR_FLAP_FVR DDRB
#define PIN_FLAP_FVR PINB
#define B_FLAP_FVR 2

#define PORT_FLAP_REV PORTA
#define DDR_FLAP_REV DDRA
#define PIN_FLAP_REV PINA
#define B_FLAP_REV 1

// Датчики DS18B20
//дачик Т1 "Улица"
#define PORT_DS_OUT PORTD
#define DDR_DS_OUT DDRD
#define PIN_DS_OUT PIND
#define B_DS_OUT 1

//дачик Т2 "Комната"
#define PORT_DS_ROOM PORTD
#define DDR_DS_ROOM DDRD
#define PIN_DS_ROOM PIND
#define B_DS_ROOM 2

//дачик Т3 "Подача"
#define PORT_DS_SRV PORTD
#define DDR_DS_SRV DDRD
#define PIN_DS_SRV PIND
#define B_DS_SRV 3

//дачик Т4 "Обратка"
#define PORT_DS_RTN PORTD
#define DDR_DS_RTN DDRD
#define PIN_DS_RTN PIND
#define B_DS_RTN 4

//дачик Т5 Датчик дымовых газов - термопара мс MAX6675
#define PORT_TC_SO PORTD
#define DDR_TC_SO DDRD
#define PIN_TC_SO PIND
#define B_TC_SO 5

#define PORT_TC_CS PORTD
#define DDR_TC_CS DDRD
#define PIN_TC_CS PIND
#define B_TC_CS 6

#define PORT_TC_SCK PORTD
#define DDR_TC_SCK DDRD
#define PIN_TC_SCK PIND
#define B_TC_SCK 7

//Beep Зуммер активный
#define PORT_BEEP PORTB
#define DDR_BEEP DDRB
#define PIN_BEEP PINB
#define B_BEEP 1

//Preheating реле включения ТЭНов подогрева
#define PORT_PHEAT PORTB
#define DDR_PHEAT DDRB
#define PIN_PHEAT PINB
#define B_PHEAT 3
//===============================================================================
void init(void);
void CheckButton(void);
void ExecuteButton(void);
void FlapTravel(uint8_t direct, uint16_t steps);
void OutFullInfoToLCD(void);	//вывод оперативной инфомации на дисплей (рисование полного экрана)
void OutVarInfoToLCD(void);	//вывод оперативной инфомации на дисплей (только переменные)
void OutTemperatureDS(uint8_t dat, uint16_t x, uint16_t y);	//вывод на дисплей значений температуры датчика DS18B20
void ReadMAX6675(void);	//данные сохраняются в VALUE_TC и STATUS_TC
void OutTemperatureTC(uint16_t x, uint16_t y);	//вывод на дисплей значений температуры датчика TC
void OutPercent(uint16_t value, uint16_t max_value, uint16_t x, uint16_t y);		//вывод на дисплей значений в процентах: value - входное значение; max_value - значение при 100%
void LoadValuesFromEEPROM(void);
void UpdateValuesFromEEPROM(void);
void OutMenuToLCD(void);	//вывод меню и уставки на дисплей
void OutMenuToLCDValue(void);	//вывод уставок меню
uint16_t OutNumber(uint8_t val, uint16_t x, uint16_t y);
uint16_t OutBigNumber(uint16_t val, uint16_t x, uint16_t y);
void Work(void);	//анализ и работа

//===============================================================================
uint8_t DS18B20_init(uint8_t dat);	//Out: 0 - OK; 1 - нет датчика
uint8_t DS18B20_send(uint8_t dat, uint8_t sbyte);	//если делать ВЫВОД 0хFF, то на выходе будет ПРИНЯТЫЙ байт
void DS18B20_convertTemp(uint8_t dat);	//отправка команды преобразования температуры.
void DS18B20_getTemp(uint8_t dat);	//запрос, получение и вычисление температуры
uint8_t DS18B20_read(uint8_t dat);	//считывает 9 байтов в буфер, подсчитывает CRC. Out: 0 - OK, 1 - error CRC
uint8_t DS_calcCRC8(uint8_t data, uint8_t crc);	//Out: CRC
// void DS18B20_SetResolution(uint8_t numBit);	//установка разрешения датчика, по умолчанию используется разрешение 12 бит
//===============================================================================


//===============================================================================
























