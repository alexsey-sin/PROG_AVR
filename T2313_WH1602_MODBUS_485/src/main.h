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
	������������ ������: https://eleccelerator.com/fusecalc/fusecalc.php?chip=attiny2313&LOW=FF&HIGH=DF&EXTENDED=FF&LOCKBIT=FF

 ��� F=16M�� (������� �����) ����� 14�� + 64��
 �����: ��� USBASP � PonyProg 	1 => ������������� ��� => ����� ���		( )
								0 => ���������� ��� => �������� ������ 	(V)
 ��� ���� LOCK �����������
---- Fuse High Byte ----
 DWEN - 				(���� V � LOCK �� ����������� ��������� ����� ������� debugWIRE ����� ����� RESET
 EESAVE -
 SPIEN - V (����������)
 WDTON -
 BODLEVEL2 -
 BODLEVEL1 -
 BODLEVEL0 -
 RSTDISBL -   (����������)
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
// #define PortDATA		PORTB	//���� �� ��������� WH1602 ������
// #define PinDATA			PINB	//

// #define PortCTRL		PORTD	//���� ����������
#define PinTxRx			2		//����� ���������� �����/�������� RS485 (0-�����; 1-��������)
#define PinWH_RW		3		//R/W (1-������ � �������, 0-������ �� �������)
#define PinWH_RS		4		//RS (1-������, 0-�������)
#define PinWH_KLight	5		//���������� ����������
#define PinWH_E			6		//E (������������ - �� ������� ������ => � 1 � 0)

// #define PortI2C			PORTB	//���� �������� �������
#define PinI2C_SCL			2	//SCL
#define PinI2C_SDA			3	//SDA
//===============================================================================
volatile uint8_t FLAGS1 = 0;
#define FL1_BLINK			0		//
#define FL1_0_OVER			1		//������������ �������� 0
#define FL1_TX				4		//�������� ����� �� RS485 ���������
// //===============================================================================
#define LCD_CMD				1		//��������� �������
#define LCD_DATA			0		//��������� ������
//===============================================================================
volatile uint8_t MY_ADDR = 201;		//����� �� ������� ���������� ��������� �� ���� RS485
#define RX_BUFFER_SIZE		30		//������ ��������� ������ � ������
volatile uint8_t RX_BUFFER[RX_BUFFER_SIZE] = {0};	//�������� ����� RS232/485
volatile uint8_t RX_cnt = 0;		//������� ����������� ���� �� RS232/485
#define TX_BUFFER_SIZE		16		//������ ������������� ������ � ������
volatile uint8_t TX_BUFFER[TX_BUFFER_SIZE] = {0};	//������������ ����� RS232/485
volatile uint8_t TX_cnt = 0;		//������� ������������ ���� �� RS232/485
volatile uint8_t TX_size = 0;		//���-�� ������������ ���� �� RS232/485
//===============================================================================
void init(void);
void LCD_init(void);
void LCD_send(uint8_t rs, uint8_t data);
void AnalizBUFFER(void);
uint16_t CalkCRC16(uint8_t* buffer, uint8_t cnt);
void StartTX_RS232(uint8_t tx);
//===============================================================================
/**
����� ������������ ��������� ������ �� ���������� WH1602.
�� ����� ��������������� RS485 - RS232.
������ �������� ������� (in HEX) ������:
	C9	����� ��(���) 8 ���
	10	������� - ������ ������ ��������� 8 ���
	00	����� ��������� ��������� ��.������ (� ��� ����� ������ 00)
	00	����� ��������� ��������� ��.������ (� ��� ����� 1 ��� 2 - ����� ������)
	00	����� ��������� ��.������ (� ��� ����� ������ 00)
	08	����� ��������� ��.������ (� ��� ����� �� 0 �� 32)2 ������ �� 16 ��������
	10	����� ���� ������ (� ��� ����� ������ 10 -> 16����, �.�. �������� � DVP 16 ������)
	��		����� �������� � ASCII
	...
	AD	CRC ��.����
	31	CRC ��.����

�����:
	C9	����� ��(���) 8 ���
	10	������� - ������ ������ ��������� 8 ���
	00	��� ��������������� ������
	XX	CRC ��.����
	XX	CRC ��.����




*/
























