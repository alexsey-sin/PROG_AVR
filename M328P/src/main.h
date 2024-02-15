// #include <avr/io.h>
// #include <avr/iom328p.h>
#include <avr/interrupt.h>
#include <util/delay.h>
#include <avr/pgmspace.h>
#include <avr/eeprom.h>
#include <string.h>
#include <stdio.h>
// #include <stdlib.h>
#include <stdint.h>

#include "../../_libs_macros/bits_macros.h"

// F = 16 MHz

#define i2c_Err_msk		0b00110011		// Маска кода ошибок
#define i2c_Err_NO		0b00000000		// All Right! 						-- Все окей, передача успешна. 
#define i2c_ERR_NA		0b00010000		// Device No Answer 				-- Слейв не отвечает. Т.к. либо занят, либо его нет на линии.
#define i2c_ERR_LP		0b00100000		// Low Priority 					-- нас перехватили собственным адресом, либо мы проиграли арбитраж
#define i2c_ERR_NK		0b00000010		// Received NACK. End Transmittion. -- Был получен NACK. Бывает и так.
#define i2c_ERR_BF		0b00000001		// BUS FAIL 						-- Автобус сломался. И этим все сказано. Можно попробовать сделать переинициализацию шины

// #define i2c_Interrupted		0b10000000	// Transmiting Interrupted		Битмаска установки флага занятости
// #define i2c_NoInterrupted 	0b01111111  // Transmiting No Interrupted	Битмаска снятия флага занятости

// #define i2c_Busy		0b01000000  	// Trans is Busy				Битмаска флага "Передатчик занят, руками не трогать". 
// #define i2c_Free		0b10111111  	// Trans is Free				Битмаска снятия флага занятости.

// #define i2c_MasterAddress 	0x32		// Адрес на который будем отзываться
#define i2c_MaxBuffer		4			// Величина буфера Master

#define i2c_type_msk	0b00001100		// Маска режима
#define i2c_sarp		0b00001000		// Start-Addr_R-Read-Stop 	Это режим чтения.
#define i2c_sawp		0b00000100		// Start-Addr_W-Write-Stop 	Это режим записи.

#define i2c_byte_msk	0b11000000		// Маска приема/передачи байта
#define i2c_write		0b10000000		// Передача байта к слейву.
#define i2c_read		0b01000000		// Прием байта от слейва.

#define i2c_LCD_Address	0x27			// Для микросхемы PCF8574 адрес будет: 0100A0A1A2. без перемычек 0b0100111 = 0x27 БИТ ЗАПИСИ СТАРШИЙ
volatile uint8_t i2c_STATUS = 0;
volatile uint8_t i2c_Buffer[i2c_MaxBuffer];			// Буфер для данных работы в режиме Master
volatile uint8_t i2c_index;							// Индекс этого буфера
volatile uint8_t i2c_ByteCount;						// Число байт передаваемых
volatile uint8_t LCD_Light = 1;						// Подсветка дисплея 0 или 1

#define LCD_RS		0
#define LCD_RW		1
#define LCD_E		2
#define LCD_LED		3

//===============================================================================
#define LCD_CMD				0		//константа команды
#define LCD_DATA			1		//константа данных
//===============================================================================
char* LabelERR PROGMEM = "Ошибка";
char* Welcome_1_row PROGMEM = "Yaroslavskiy";
char* Welcome_2_row PROGMEM = "BEVERAGE FACTORY";
char* Welcome_4_row PROGMEM = "Strobe v1.0";
// char* Label_time PROGMEM = "Период(ms): ";
char* Label_time PROGMEM = "Воздух(%): ";
char* Label_shift PROGMEM = "Сдвиг(ms): ";

char* row_1 PROGMEM = "01234567890123456789";

// volatile uint8_t STATUS = 0;
// #define ST_BLC      		0
// #define ST_BTN      		1		//есть событие по кнопкам
// #define ST_BTN_WAIT 		2		//антидребезг
// #define ST_MENU     		3		//0 - работа, вывод на дисплей оперативных параметров 1 - режим меню
// #define ST_WORK_PAUSE_HIGH	4		//Запрос на паузу верхняя дверца
// #define ST_WORK_PAUSE_LOW	5		//Запрос на паузу нижняя дверца
// #define ST_WORK_PAUSE_STOP	6		//Запрос на выход из паузы

// volatile uint8_t BUTTON = 0;
// #define MMM      0		//кнопка М
// #define PLS      1		//кнопка +
// #define MIN      2		//кнопка -

// #define MUL_BTN_WAIT	10	//множитель на 16.4мкс антидребезг кнопок
// volatile uint8_t CountMUL_BTN_WAIT = 0;

// volatile uint8_t MENU = 0;	//текущая позиция меню (индекс. от 0 до 11 включительно)
// #define MUL_MENU_WAIT	10	//множитель на ~1сек, ожидание выхода из меню
// volatile uint8_t CountMUL_MENU_WAIT = 0;


// volatile uint8_t DS_TempData[9];
// volatile double dbDS_OUT;				//дачик "Улица"
// volatile double dbDS_ROOM;				//дачик "Комната"
// volatile double dbDS_SERVE;				//дачик "Подача"
// volatile double dbDS_RETURN;			//дачик "Обратка"
// volatile uint8_t STATUS_DS_OUT;
// volatile uint8_t STATUS_DS_ROOM;
// volatile uint8_t STATUS_DS_SERVE;
// volatile uint8_t STATUS_DS_RETURN;
// /**  Датчики Т1 - Т4
	// STATUS_DS регистр состояния датчика DS18B20
	// 0 - неопределенное состояние (начальное) или ошибка
	// 1 - нормально, есть измеренное значение температуры в регистре DS_Temp (double)
// */
// volatile uint8_t STATUS_TC = 0;
// volatile uint16_t VALUE_TC = 0;
// /**  Датчик Т5
	// STATUS_TC регистр состояния датчика Т5 (термопара К-типа)
	// 0 - неопределенное состояние (начальное)
	// 1 - нормально, есть измеренное значение температуры => значение в градусах в регистре VALUE_TC1
	// 2 - обрыв датчика
	// 3 - превышение максимального значения (больше 999 Гр. по цельсию)
// */

// volatile uint8_t BOILER_STATUS = 10;	//Регистр состояния котла
// /**  
	// 0 - Неопределенное состояние
	// 1 - ОЖИДАНИЕ
		// VALUE_TC <= SETVAL_TEMP_BOILER_OFF температура дымохода меньше температуры уставки отключения управления котла
			// В этом режиме если установлен автоматический подогрев ТЭНами возможно включение ТЭНов когда
			// DS_Temp4(обратка) <= EE_SETVAL_TEMP_TEN_ON и выключение ТЭНов когда DS_Temp4(обратка) >= SETVAL_TEMP_TEN_OFF
	// 2 - РАБОТА АВТОМАТ
	// 3 - ОСТАНОВЛЕН
	// 4 - ОШИБКА
		// Состояние любого из датчиков TC, DS2, DS3, DS4 имеет ошибку или неисправен
	// 5 - ПАУЗА
	// 6 - РУЧНОЙ
// */
// #define BOILER_STATUS_UNKNOWN	0
// #define BOILER_STATUS_IDLE		1
// #define BOILER_STATUS_AUTO		2
// #define BOILER_STATUS_STOP		3
// #define BOILER_STATUS_ERROR		4
// #define BOILER_STATUS_PAUSE		5
// #define BOILER_STATUS_MANUAL	6

// // volatile uint8_t *PORT_Reg;
// volatile uint8_t *DDR_Reg;
// volatile uint8_t *PIN_Reg;

// volatile uint8_t FLAP_STATE = 0;		//текущее положение фаз (0 - 3)
// volatile int16_t FLAP_STEPS = 0;		//текущее положение в шагах (0 - 250)
// #define FLAP_STEP_MAX	250

// #define time_flap	5
// #define FLAP_INIT		3	//закрыть до нуля заслонку независимо от FLAP_STEPS
// #define FLAP_START		2	//закрыть до нуля заслонку
// #define FLAP_FORVARD	1	//открывать заслонку
// #define FLAP_REVERCE	0	//закрывать заслонку

// volatile uint16_t Count_PAUSE_SEC = 0;
// volatile uint16_t EXTREMUM = 0;
// #define DELTA_EXTREMUM	2
// volatile int8_t ALARM_TRIGGER = 0;		//1 - взведенное положение разрешающее сигнализацию о прогорании дров
// #define ALARM_TRIGGER_OFF		0
// #define ALARM_TRIGGER_ON		1
// //===============================================================================
// // Сохраняемые уставки и переменные
// volatile uint8_t SETVAL_AUTO_CONTROL;			// Автоматическая регулировка / Ручная	Индекс в МЕНЮ - 0
// uint8_t EEMEM EE_SETVAL_AUTO_CONTROL = 1;		// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_AUTO_CONTROL_MAN	0			// Ручная регулировка
// #define DEF_SETVAL_AUTO_CONTROL_AUTO	1		// Автоматическая регулировка
// volatile uint8_t SETVAL_FLAP_MANUAL_STEP;		// Количество шагов двигателя заслонки в ручном режиме	Индекс в МЕНЮ - 1
// uint8_t EEMEM EE_SETVAL_FLAP_MANUAL_STEP = 5;	// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_FLAP_MANUAL_STEP_MIN	1		//от
// #define DEF_SETVAL_FLAP_MANUAL_STEP_MAX	25		//до
// #define DEF_SETVAL_FLAP_MANUAL_STEP_STEP	1	//шаг
// volatile uint8_t SETVAL_SMOKE_DEAD_BAND;		// Зона нечувствительности датчика дымохода в каждую сторону (целые градусы)	Индекс в МЕНЮ - 2
// uint8_t EEMEM EE_SETVAL_SMOKE_DEAD_BAND = 5;	// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_SMOKE_DEAD_BAND_MIN	1		//от
// #define DEF_SETVAL_SMOKE_DEAD_BAND_MAX	20		//до
// #define DEF_SETVAL_SMOKE_DEAD_BAND_STEP	1		//шаг
// volatile uint8_t SETVAL_FLAP_AUTO_STEP;			// Количество шагов двигателя заслонки в автоматическом режиме	Индекс в МЕНЮ - 3
// uint8_t EEMEM EE_SETVAL_FLAP_AUTO_STEP = 5;		// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_FLAP_AUTO_STEP_MIN	1		//от
// #define DEF_SETVAL_FLAP_AUTO_STEP_MAX	25		//до
// #define DEF_SETVAL_FLAP_AUTO_STEP_STEP	1		//шаг
// volatile uint8_t SETVAL_FLAP_START_STEPS;		// Стартовое положение заслонки в %	Индекс в МЕНЮ - 4
// uint8_t EEMEM EE_SETVAL_FLAP_START_STEPS = 30;	// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_FLAP_START_STEPS_MIN	5		//от
// #define DEF_SETVAL_FLAP_START_STEPS_MAX	50		//до
// #define DEF_SETVAL_FLAP_START_STEPS_STEP	1	//шаг

// volatile uint8_t SETVAL_TEMP_SMOKE;				// температура газов дымохода (целые градусы) 	Индекс в МЕНЮ - 5
// uint8_t EEMEM EE_SETVAL_TEMP_SMOKE = 200;		// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_TEMP_SMOKE_MIN	100			//от
// #define DEF_SETVAL_TEMP_SMOKE_MAX	255			//до
// #define DEF_SETVAL_TEMP_SMOKE_STEP	5			//шаг
// volatile uint8_t SETVAL_MAX_TEMP_SERVE;			// максимальная температура подачи (целые градусы)	Индекс в МЕНЮ - 6
// uint8_t EEMEM EE_SETVAL_MAX_TEMP_SERVE = 80;	// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_MAX_TEMP_SERVE_MIN	40		//от
// #define DEF_SETVAL_MAX_TEMP_SERVE_MAX	95		//до
// #define DEF_SETVAL_MAX_TEMP_SERVE_STEP	1		//шаг
// volatile uint8_t SETVAL_MAX_TEMP_ROOM;			// максимальная температура комнаты (целые градусы)	Индекс в МЕНЮ - 7
// uint8_t EEMEM EE_SETVAL_MAX_TEMP_ROOM = 22;		// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_MAX_TEMP_ROOM_MIN	15		//от
// #define DEF_SETVAL_MAX_TEMP_ROOM_MAX	28		//до
// #define DEF_SETVAL_MAX_TEMP_ROOM_STEP	1		//шаг
// volatile uint8_t SETVAL_TEMP_BOILER_OFF;		// Температура дымохода отключения управления котла (целые градусы)	Индекс в МЕНЮ - 8
// uint8_t EEMEM EE_SETVAL_TEMP_BOILER_OFF = 60;	// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_TEMP_BOILER_OFF_MIN	20		//от
// #define DEF_SETVAL_TEMP_BOILER_OFF_MAX	70		//до
// #define DEF_SETVAL_TEMP_BOILER_OFF_STEP	5		//шаг

// volatile uint8_t SETVAL_LIGHT_ALL_ON;			// Работа индикатора	Индекс в МЕНЮ - 9
// uint8_t EEMEM EE_SETVAL_LIGHT_ALL_ON = 1;		// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_LIGHT_AUTO	0				// Включение по датчику присутствия / с кнопок
// #define DEF_SETVAL_LIGHT_ALL_ON	1				// Всегда включен
// volatile uint8_t SETVAL_ALARM_FUEL_ON;			// Сигнализация прогорания топлива	Индекс в МЕНЮ - 10
// uint8_t EEMEM EE_SETVAL_ALARM_FUEL_ON = 1;		// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_ALARM_FUEL_OFF	0			// Выключена
// #define DEF_SETVAL_ALARM_FUEL_ON	1			// Включена
// volatile uint8_t SETVAL_TEMP_ALARM_FUEL;		// Температура сигнализации прогорания топлива (целые градусы)	Индекс в МЕНЮ - 11
// uint8_t EEMEM EE_SETVAL_TEMP_ALARM_FUEL = 150;	// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_TEMP_ALARM_FUEL_MIN	80		//от
// #define DEF_SETVAL_TEMP_ALARM_FUEL_MAX	150		//до
// #define DEF_SETVAL_TEMP_ALARM_FUEL_STEP	5		//шаг

// volatile uint8_t SETVAL_AUTO_HEAT;				// Автоматический подогрев ТЕНами	Индекс в МЕНЮ - 12
// uint8_t EEMEM EE_SETVAL_AUTO_HEAT = 1;			// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_AUTO_HEAT_OFF	0			// Подогрев выключен
// #define DEF_SETVAL_AUTO_HEAT_ON	1				// Автоматический подогрев включен
// volatile uint8_t SETVAL_TEMP_TEN_ON;			// температура включения ТЕНов аварийный подогрев (целые градусы)	Индекс в МЕНЮ - 13
// uint8_t EEMEM EE_SETVAL_TEMP_TEN_ON = 10;		// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_TEMP_TEN_ON_MIN	5			//от
// #define DEF_SETVAL_TEMP_TEN_ON_MAX	25			//до
// #define DEF_SETVAL_TEMP_TEN_ON_STEP	1			//шаг
// volatile uint8_t SETVAL_TEMP_TEN_OFF;			// температура выключения ТЕНов аварийный подогрев (целые градусы)	Индекс в МЕНЮ - 14
// uint8_t EEMEM EE_SETVAL_TEMP_TEN_OFF = 15;		// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_TEMP_TEN_OFF_MIN	6			//от
// #define DEF_SETVAL_TEMP_TEN_OFF_MAX	30			//до
// #define DEF_SETVAL_TEMP_TEN_OFF_STEP	1		//шаг
// volatile uint8_t SETVAL_DELAY_PAUSE;			// Задержка в регулировании в режиме рауза (целые минуты)	Индекс в МЕНЮ - 15
// uint8_t EEMEM EE_SETVAL_DELAY_PAUSE = 3;		// начальное значение сохраненное в EEPROM
// #define DEF_SETVAL_DELAY_PAUSE_MIN	1			//от
// #define DEF_SETVAL_DELAY_PAUSE_MAX	10			//до
// #define DEF_SETVAL_DELAY_PAUSE_STEP	1			//шаг
// //===============================================================================
// // const char* LabelHeader PROGMEM = "Boiler2 v2.0 18.09.2020";
// // char* LabelT_out PROGMEM = "Улица: ";
// // char* LabelT_room PROGMEM = "Комната: ";
// // char* LabelT_serve PROGMEM = "Подача: ";
// // char* LabelT_return PROGMEM = "Обратка: ";
// // char* LabelT_smoke PROGMEM = "Дымоход: ";
// // char* Label_Flap PROGMEM = "Заслонка тяги: ";
// // char* Label_Sunro PROGMEM = "Шибер: ";
// // char* Label_Pump PROGMEM = "Насос: ";
// char* LabelUNC PROGMEM = "UNC";
// // // char* LabelBRK PROGMEM = "BREAK";
// char* LabelBRK PROGMEM = "-----";
// char* LabelOVR PROGMEM = "OVER";
// char* LabelERR PROGMEM = "ERROR";
// // // char* LabelSetting PROGMEM = "НАСТРОЙКА";
// //===============================================================================
// #define DS18B20_SEARCH_ROM 		0xF0	//Поиск адресов всех устройств по спецалгоритму
// #define DS18B20_READ_ROM 		0x33	//Считываение адреса единственного устройства
// #define DS18B20_MATCH_ROM 		0x55	//Активация конкретного устройства по его адресу
// #define DS18B20_SKIP_ROM 		0xCC	//Обращение к единственному на шине устройству без указания его адреса
// #define DS18B20_ALARM_SEARCH 	0xEC	//Поиск устройств, у которых сработал ALARM (алгоритм поиска как у CMD_SERCH_ROM)
// #define DS18B20_CONVERT_T 		0x44	//Старт преобразования температуры
// #define DS18B20_W_SCRATCHPAD 	0x4E	//Запись во внутренний буфер (регистры)
// #define DS18B20_R_SCRATCHPAD 	0xBE	//Чтение внутреннего буфера (регистров)
// #define DS18B20_C_SCRATCHPAD 	0x48	//Сохранение регистров в EEPROM 
// #define DS18B20_RECALL_EE 		0xB8	//Заносит в буфер из EEPROM значение порога ALARM
// #define DS18B20_READ_POWER 		0xB4	//Определение, есть ли в шине устройства с паразитным питанием
// #define DS18B20_RES_9BIT 		0x1F	//Разрешение датчика (9 бит)
// #define DS18B20_RES_10BIT 		0x3F	//Разрешение датчика (10 бит)
// #define DS18B20_RES_11BIT 		0x5F	//Разрешение датчика (11 бит)
// #define DS18B20_RES_12BIT 		0x7F	//Разрешение датчика (12 бит)
// #define CRC8INIT				0x00
// #define CRC8POLY				0x18	//0X18 = X^8+X^5+X^4+X^0
//===============================================================================
// BOARD
//===============================================================================
// LED L на плате
#define PORT_LED_L PORTB
#define DDR_LED_L DDRB
#define PIN_LED_L PINB
#define B_LED_L 5

// Порт I2C
#define PORT_I2C PORTC
#define DDR_I2C DDRC
#define B_SCL 5
#define B_SCA 4
//===============================================================================
void init(void);
void InitLCD(void);
void I2C_StartCondition(void);
void I2C_StopCondition(void);
void I2C_SendAddress(char addr);
void I2C_SendByte(char ch);
void I2C_SendChar(char ch, uint8_t cmd);	// Отправка байта с разбивкой на полубайты со стробирование Е
void LCD_send_poluChar(uint8_t pch, uint8_t cmd);
void LCD_write_string(uint8_t row, uint8_t pos, char* str);
void LCD_ClearDisplay(void);
// void LCD_send(uint8_t rs, uint8_t rw, uint8_t ld, uint8_t bt);
// void CheckButton(void);
// void ExecuteButton(void);
// void FlapTravel(uint8_t direct, uint16_t steps);
// void OutFullInfoToLCD(void);	//вывод оперативной инфомации на дисплей (рисование полного экрана)
// void OutVarInfoToLCD(void);	//вывод оперативной инфомации на дисплей (только переменные)
// void OutTemperatureDS(uint8_t dat, uint16_t x, uint16_t y);	//вывод на дисплей значений температуры датчика DS18B20
// void ReadMAX6675(void);	//данные сохраняются в VALUE_TC и STATUS_TC
// void OutTemperatureTC(uint16_t x, uint16_t y);	//вывод на дисплей значений температуры датчика TC
// void OutPercent(uint16_t value, uint16_t max_value, uint16_t x, uint16_t y);		//вывод на дисплей значений в процентах: value - входное значение; max_value - значение при 100%
// void LoadValuesFromEEPROM(void);
// void UpdateValuesFromEEPROM(void);
// void OutMenuToLCD(void);	//вывод меню и уставки на дисплей
// void OutMenuToLCDValue(void);	//вывод уставок меню
// uint16_t OutNumber(uint8_t val, uint16_t x, uint16_t y);
// uint16_t OutBigNumber(uint16_t val, uint16_t x, uint16_t y);
// void Work(void);	//анализ и работа

//===============================================================================
// uint8_t DS18B20_init(uint8_t dat);	//Out: 0 - OK; 1 - нет датчика
// uint8_t DS18B20_send(uint8_t dat, uint8_t sbyte);	//если делать ВЫВОД 0хFF, то на выходе будет ПРИНЯТЫЙ байт
// void DS18B20_convertTemp(uint8_t dat);	//отправка команды преобразования температуры.
// void DS18B20_getTemp(uint8_t dat);	//запрос, получение и вычисление температуры
// uint8_t DS18B20_read(uint8_t dat);	//считывает 9 байтов в буфер, подсчитывает CRC. Out: 0 - OK, 1 - error CRC
// uint8_t DS_calcCRC8(uint8_t data, uint8_t crc);	//Out: CRC
// // void DS18B20_SetResolution(uint8_t numBit);	//установка разрешения датчика, по умолчанию используется разрешение 12 бит
//===============================================================================
// char GetHex(uint8_t b);
// void Work_T12_M12(void);	//анализ и работа контура с датчиками Т1 и Т2 и вентиляторами М1 и М2
// void Work_T3_M3(void);	//анализ и работа контура с датчиком Т3 и вентилятором М3
// uint8_t OutBigNumber(uint16_t val);	//вывод переменных значений уставок на дисплей
// uint8_t CalculatePercent(uint8_t diskr);

//===============================================================================

/**
	АВТОМАТ УПРАВЛЕНИЯ ТВЕРДОТОПЛИВНЫМ КОТЛОМ ТЕПЛОДАР ОК-20
	Датчики:
		Т1 - DS18B20 до +125гр.С => контроль температуры в помещении.
		Т2 - DS18B20 до +125гр.С => контроль температуры в помещении.
		Т3 - DS18B20 до +125гр.С => контроль температуры в помещении.
		Т4 - DS18B20 до +125гр.С => контроль температуры в помещении.
		Т5 - термопара К-типа (хромель-алюмель) до 999гр.С => контроль температуры дымовых газов.
	// Вентиляторы: (питание всех 12 вольт, мощность 6-12Вт)
		// М1 => подача воздуха в подколосниковое пространство.
		// М2 => подача воздуха в основную топку.
		// М3 => подача воздуха в камеру дожига пиролизных газов.

	// Индикация и управление:
		// Основной ЖК дисплей 84х48пикс.
			// В нормальном режиме показывает температуру и состояние всех датчиков
			// и состояние вентиляторов в % выдаваемой мощности воздушного потока
			// В режиме настройки позволяет просмотреть и корректировать уставки работы автомата
		// Светодиод:
			// 2 режима: кратковременные вспышки (1 раз в секунду) - автомат выключен, контроль датчиков
					  // кратковременные выключения (1 раз в секунду) - автомат включен.

		// Три кнопки: "М", "+", "-" 
			// "М" - вход  меню настройки и перелистывание параметров по кольцу.
			// "+" и "-" - в режиме настройки коррекция соответствующего параметра уставок
				// в нормальном режиме вкл и выкл подсветки для дежурного режима
			// Выход из режима меню - 10 секунд без нажатий на кнопки.
	
	// АЛГОРИТМ РАБОТЫ:
	// Работа автомата разбита условно на 2 независимых контура.
		// 1 контур: датчики Т1, Т2 и вентиляторы М1, М2
		// 2 контур: датчик Т3 и вентилятор М3

		// 1 контур включается в работу когда разность Т2 - Т1 больше заданной уставки
		// и выключается соответственно когда разность Т2 - Т1 меньше уставки.

		// Процедура запуска вентияторов М1 и М2:
			// разгон М1 от старта (уставка) до 100% в течении времени уставки в мин.
			// ожидание 30 секунд
			// разгон М2 от старта (уставка) до 100% в течении 30 секунд

		// Процедура остановки вентиляторов М1 и М2:
			// выключение вентилятора М2
			// ожидание 15 секунд
			// плавная остановка вентилятора М1 в течении времени уставки в мин.
			
		// Условия запуска М1-М2:
			// температура Т1 меньше или равно (уставка - дельта)
			// и
			// температура Т2 меньше или равно (уставка - дельта)
			
		// Условия остановки М1-М2:
			// температура Т1 либо Т2 достигла или выше своих уставок

		// 2 контур включен всегда, вентилятор М3 включается в работу с мощностью своей уставки
		// при достижении Т3 температуры "старт пиролиз" и пропорционально увеличивает мощность
		// с ростом температуры Т3. На 100% мощности вентилятор выходит при достижении Т3 
		// температуры "полный пиролиз" и продолжает работать на этой мощности в случае 
		// дальнейшего роста температуры Т3. При снижении темтературы Т3 в диапазоне
		// "полный пиролиз" - "старт пиролиз" М3 пропорционально уменьшает мощность до полной остановки.

*/
























