#include <avr/io.h>
#include <avr/iom64.h>
#include <avr/interrupt.h>
#include <util/delay.h>
#include <avr/pgmspace.h>
#include <avr/eeprom.h>		/* e:\WinAVR\avr\include\avr\ */
#include <string.h>
#include <stdio.h>
// #include <stdlib.h>
#include <stdint.h>

#include "../../_libs_macros/bits_macros.h"
// #include "../../_lib_tft_ili9486/tft_ili9486.h"
// #include "../../_fonts/fonts.h"

// F = 11.0592 MHz
/**
	конфигурация фьюзов: https://eleccelerator.com/fusecalc/fusecalc.php?chip=atmega64a&LOW=DE&HIGH=DF&EXTENDED=FF&LOCKBIT=FF
*/
#define F_CPU 11059200UL

// #define ROW_SIZE		40							//размер буфера в байтах
// volatile uint8_t ROW_BUFFER[ROW_SIZE] = {0};		//буфер
char* LabelERR PROGMEM = "Ошибка";
char* Welcome_1_row PROGMEM = "ЯРОСЛАВСКИЙ";
char* Welcome_2_row PROGMEM = "ЗАВОД НАПИТКОВ";
char* Welcome_4_row PROGMEM = "Стробоскоп v1.0";
// char* Label_time PROGMEM = "Период(ms): ";
char* Label_time PROGMEM = "Воздух(%): ";
char* Label_shift PROGMEM = "Сдвиг(ms): ";
//===============================================================================
#define LCD_CMD				1		//константа команды
#define LCD_DATA			0		//константа данных
//===============================================================================
// BOARD
//===============================================================================
// LCD WH
#define PORT_WH_RW PORTG
#define DDR_WH_RW DDRG
#define PinWH_RW		0		//R/W (0-запись в дисплей, 1-чтение из дисплея)

#define PORT_WH_RS PORTD
#define DDR_WH_RS DDRD
#define PinWH_RS		7		//RS (1-данные, 0-команда)

#define PORT_WH_KLight PORTG
#define DDR_WH_KLight DDRG
#define PinWH_KLight	2		//Управление подсветкой

#define PORT_WH_Contrast PORTB
#define DDR_WH_Contrast DDRB
#define PinWH_Contrast	7		//43.1 кГц для отрицательного напряжения контраста

#define PORT_WH_E PORTG
#define DDR_WH_E DDRG
#define PinWH_E			1		//E (тактирование - по заднему фронту => с 1 в 0)

#define PORT_WH_DATA PORTC
#define DDR_WH_DATA DDRC

// LED_GREEN_RED
#define PORT_LED_GREEN PORTF
#define DDR_LED_GREEN DDRF
#define PinLED_GREEN		5

#define PORT_LED_RED PORTF
#define DDR_LED_RED DDRF
#define PinLED_RED		6

// Энкодеры
// Время Time
#define PORT_ENC_TIME_A PORTA
#define DDR_ENC_TIME_A DDRA
#define PIN_ENC_TIME_A PINA
#define Pin_ENC_TIME_A 0
#define PORT_ENC_TIME_B PORTA
#define DDR_ENC_TIME_B DDRA
#define PIN_ENC_TIME_B PINA
#define Pin_ENC_TIME_B 1
// Сдвиг Shift
#define PORT_ENC_SHIFT_A PORTA
#define DDR_ENC_SHIFT_A DDRA
#define PIN_ENC_SHIFT_A PINA
#define Pin_ENC_SHIFT_A 2
#define PORT_ENC_SHIFT_B PORTA
#define DDR_ENC_SHIFT_B DDRA
#define PIN_ENC_SHIFT_B PINA
#define Pin_ENC_SHIFT_B 4

// Датчик
#define PORT_SENSOR PORTD
#define DDR_SENSOR DDRD
#define PIN_SENSOR PIND
// #define Pin_SENSOR 2
#define Pin_SENSOR 0

// Лампа стробоскопа
#define PORT_STROBE PORTE
#define DDR_STROBE DDRE
#define PIN_STROBE PINE
#define Pin_STROBE 4

// Выход ШИМ
#define PORT_SHIM PORTB
#define DDR_SHIM DDRB
#define PIN_SHIM PINB
#define Pin_SHIM 4

//===============================================================================
uint8_t val_enc_time = 0;
uint8_t val_tmp_enc_time = 0;
// uint8_t val_enc_shift = 0;
// uint8_t val_tmp_enc_shift = 0;

// uint8_t val_sensor = 0;

char buf_tmp10[10];

// Сохраняемые уставки и переменные
volatile uint16_t VAL_TIME = 10;		// Время свечения лампы стробоскопа в мс
// uint16_t EEMEM EE_VAL_TIME = 100;	// начальное значение сохраненное в EEPROM
#define DEF_VAL_TIME_MIN	0			//от
#define DEF_VAL_TIME_MAX	100			//до
#define DEF_VAL_TIME_STEP	5			//шаг
// volatile uint16_t VAL_SHIFT = 200;		// Время от сигнала датчика до зажигания лампы стробоскопа в мс
// // uint16_t EEMEM EE_VAL_SHIFT = 100;	// начальное значение сохраненное в EEPROM
// #define DEF_VAL_SHIFT_MIN	1			//от
// #define DEF_VAL_SHIFT_MAX	500			//до
// #define DEF_VAL_SHIFT_STEP	10			//шаг

//===============================================================================
void init(void);
void LCD_init(void);
void LCD_send(uint8_t rs, uint8_t data);
void LCD_write_string(uint8_t row, uint8_t pos, char* str);
uint8_t read_gray_code_from_encoder_time(void);
// uint8_t read_gray_code_from_encoder_shift(void);
void UpdatePWM(uint8_t per_pwm);
// void LoadValuesFromEEPROM(void);
// void UpdateValuesFromEEPROM(void);
void OutTimeToLCD(void);
// void OutShiftToLCD(void);
void WriteBufBigNumber(uint16_t val);
//===============================================================================
/**
	РЕГУЛИРУЕМЫЙ СТРОБОСКОП
	
	Скорость бутылок 10000 - 25000 бут./час
	Соответственно время между бутылками: (3600/б.ч.) 360 - 144 мс
	
	Время свечения фонаря стробоскопа от 0 до 500 мс
	Задержка зажигания от сигнала датчика от 0 до 500 мс
	
	Используем таймеры: 
		1 (16бит) для отсчета времени свечения фонаря стробоскопа
		3 (16бит) для отсчета времени сдвига старта
	
	По сигналу от датчика (прерывание INT0) ниспадающий фронт
	запускается таймер 3. Отсчитывается необходимое время и
	включается лампа стробоскопа. Одновременно запускается
	1 таймер для отсчета времени свечения.
	
*/



#ifndef __WEH1602CHARTABLE
#define __WEH1602CHARTABLE

char charTable[256] = {
	0x00,0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,
	0x10,0x11,0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,
	0x20,0x21,0x22,0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,
	0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,
	0x40,0x41,0x42,0x43,0x44,0x45,0x46,0x47,0x48,0x49,0x4A,0x4B,0x4C,0x4D,0x4E,0x4F,
	0x50,0x51,0x52,0x53,0x54,0x55,0x56,0x57,0x58,0x59,0x5A,0x5B,0x5C,0x5D,0x5E,0x5F,
	0x60,0x61,0x62,0x63,0x64,0x65,0x66,0x67,0x68,0x69,0x6A,0x6B,0x6C,0x6D,0x6E,0x6F,
	0x70,0x71,0x72,0x73,0x74,0x75,0x76,0x77,0x78,0x79,0x7A,0x7B,0x7C,0x7D,0x7E,0x7F,
	0x80,0x81,0x82,0x83,0x84,0x85,0x86,0x87,0x88,0x89,0x8A,0x8B,0x8C,0x8D,0x8E,0x8F,
	0x90,0x91,0x92,0x93,0x94,0x95,0x96,0x97,0x98,0x99,0x9A,0x9B,0x9C,0x9D,0x9E,0x9F,
	0xA0,0xA1,0xA2,0xA3,0xA4,0xA5,0xA6,0xA7,0xA2,0xA9,0xAA,0xAB,0xAC,0xAD,0xAE,0xAF,
	0xB0,0xB1,0xB2,0xB3,0xB4,0xB5,0xB6,0xB7,0xB5,0xB9,0xBA,0xBB,0xBC,0xBD,0xBE,0xBF,
	0x41,0xA0,0x42,0xA1,0xE0,0x45,0xA3,0xA4,0xA5,0xA6,0x4B,0xA7,0x4D,0x48,0x4F,0xA8,
	0x50,0x43,0x54,0xA9,0xAA,0x58,0xE1,0xAB,0xAC,0xE2,0xAD,0xAE,0x62,0xAF,0xB0,0xB1,
	0x61,0xB2,0xB3,0xB4,0xE3,0x65,0xB6,0xB7,0xB8,0xB9,0xBA,0xBB,0xBC,0xBD,0x6F,0xBE,
	0x70,0x63,0xBF,0x79,0xE4,0x78,0xE5,0xC0,0xC1,0xE6,0xC2,0xC3,0xC4,0xC5,0xC6,0xC7
};
#endif





