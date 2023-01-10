#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h>
// #include <avr/pgmspace.h>
// #include <avr/eeprom.h>
// #include <string.h>
// #include <stdio.h>
// #include <stdlib.h>
// #include <stdint.h>

// #include "Font 6x8.c"
// #include "Font 12x16.c"

/**
	конфигурация фьюзов: https://eleccelerator.com/fusecalc/fusecalc.php?chip=attiny2313&LOW=FF&HIGH=DF&EXTENDED=FF&LOCKBIT=FF

 для F=16MГц (внешний кварц) старт 14СК + 64мс
 Фьюзы: для USBASP и PonyProg 	1 => установленный бит => галки нет		( )
								0 => сброшенный бит => отмечено галкой 	(V)
 все биты LOCK установлены
---- Fuse High Byte ----
 DWEN - 				(если V и LOCK не установлены влючается режим отладки debugWIRE через вывод RESET
 EESAVE -
 SPIEN - V (недоступен)
 WDTON -
 BODLEVEL2 -
 BODLEVEL1 -
 BODLEVEL0 -
 RSTDISBL -   (недоступен)
---- Fuse Low Byte ----
 CKDIV8 - 
 CKOUT -
 SUT1 -
 SUT0 -
 CKSEL3 -
 CKSEL2 -
 CKSEL1 -
 CKSEL0 -
*/
#define F_CPU 16000000UL

#define		SetBit(reg, bit)			reg |= (1<<bit)           
#define		ClrBit(reg, bit)			reg &= (~(1<<bit))
#define		InvBit(reg, bit)			reg ^= (1<<bit)
#define		BitIsSet(reg, bit)			((reg & (1<<bit)) != 0)
#define		BitIsClr(reg, bit)		((reg & (1<<bit)) == 0)

//===============================================================================
// BOARD
//===============================================================================
// #define PortDATA		PORTB	//порт на индикатор WH1602 данные
// #define PinDATA			PINB	//

// #define PortCTRL		PORTD	//порт управления
#define PinTxRx			2		//вывод управления прием/передача RS485 (0-прием; 1-передача)
#define PinWH_RW		3		//R/W (1-запись в дисплей, 0-чтение из дисплея)
#define PinWH_RS		4		//RS (1-данные, 0-команда)
#define PinWH_KLight	5		//Управление подсветкой
#define PinWH_E			6		//E (тактирование - по заднему фронту => с 1 в 0)

// #define PortI2C			PORTB	//порт входящих посылок
#define PinI2C_SCL			2	//SCL
#define PinI2C_SDA			3	//SDA
//===============================================================================
volatile uint8_t FLAGS1 = 0;
#define FL1_BLINK			0		//
#define FL1_0_OVER			1		//переполнение счетчика 0
#define FL1_TX				4		//передача байта по RS485 завершена
// //===============================================================================
#define LCD_CMD				1		//константа команды
#define LCD_DATA			0		//константа данных
//===============================================================================
volatile uint8_t MY_ADDR = 201;		//адрес на который отзывается котроллер по шине RS485
#define RX_BUFFER_SIZE		30		//размер приемного буфера в байтах
volatile uint8_t RX_BUFFER[RX_BUFFER_SIZE] = {0};	//приемный буфер RS232/485
volatile uint8_t RX_cnt = 0;		//счетчик принимаемых байт по RS232/485
#define TX_BUFFER_SIZE		16		//размер передаваемого буфера в байтах
volatile uint8_t TX_BUFFER[TX_BUFFER_SIZE] = {0};	//передаваемый буфер RS232/485
volatile uint8_t TX_cnt = 0;		//счетчик передаваемых байт по RS232/485
volatile uint8_t TX_size = 0;		//кол-во передаваемых байт по RS232/485
//===============================================================================
void init(void);
void LCD_init(void);
void LCD_send(uint8_t rs, uint8_t data);
void AnalizBUFFER(void);
uint16_t CalkCRC16(uint8_t* buffer, uint8_t cnt);
void StartTX_RS232(uint8_t tx);
//===============================================================================
/**
Схема осуществляет индикацию данных на индикаторе WH1602.
На входе преобразователь RS485 - RS232.
Формат входящей посылки (in HEX) пример:
	C9	адрес МК(мой) 8 бит
	10	команда - запись группы регистров 8 бит
	00	адрес регистров приемника ст.разряд (у нас будет всегда 00)
	00	адрес регистров приемника мл.разряд (у нас будет 1 или 2 - номер строки)
	00	число регистров ст.разряд (у нас будет всегда 00)
	08	число регистров мл.разряд (у нас будет от 0 до 32)2 строки по 16 символов
	10	число байт данных (у нас будет всегда 10 -> 16байт, т.к. регистры у DVP 16 битные)
	ХХ		байты символов в ASCII
	...
	AD	CRC ст.байт
	31	CRC мл.байт

Ответ:
	C9	адрес МК(мой) 8 бит
	10	команда - запись группы регистров 8 бит
	00	код исключительного ответа
	XX	CRC ст.байт
	XX	CRC мл.байт




*/
























