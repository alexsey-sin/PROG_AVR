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

#define i2c_Err_msk		0b00110011		// ����� ���� ������
#define i2c_Err_NO		0b00000000		// All Right! 						-- ��� ����, �������� �������. 
#define i2c_ERR_NA		0b00010000		// Device No Answer 				-- ����� �� ��������. �.�. ���� �����, ���� ��� ��� �� �����.
#define i2c_ERR_LP		0b00100000		// Low Priority 					-- ��� ����������� ����������� �������, ���� �� ��������� ��������
#define i2c_ERR_NK		0b00000010		// Received NACK. End Transmittion. -- ��� ������� NACK. ������ � ���.
#define i2c_ERR_BF		0b00000001		// BUS FAIL 						-- ������� ��������. � ���� ��� �������. ����� ����������� ������� ����������������� ����

// #define i2c_Interrupted		0b10000000	// Transmiting Interrupted		�������� ��������� ����� ���������
// #define i2c_NoInterrupted 	0b01111111  // Transmiting No Interrupted	�������� ������ ����� ���������

// #define i2c_Busy		0b01000000  	// Trans is Busy				�������� ����� "���������� �����, ������ �� �������". 
// #define i2c_Free		0b10111111  	// Trans is Free				�������� ������ ����� ���������.

// #define i2c_MasterAddress 	0x32		// ����� �� ������� ����� ����������
#define i2c_MaxBuffer		4			// �������� ������ Master

#define i2c_type_msk	0b00001100		// ����� ������
#define i2c_sarp		0b00001000		// Start-Addr_R-Read-Stop 	��� ����� ������.
#define i2c_sawp		0b00000100		// Start-Addr_W-Write-Stop 	��� ����� ������.

#define i2c_byte_msk	0b11000000		// ����� ������/�������� �����
#define i2c_write		0b10000000		// �������� ����� � ������.
#define i2c_read		0b01000000		// ����� ����� �� ������.

#define i2c_LCD_Address	0x27			// ��� ���������� PCF8574 ����� �����: 0100A0A1A2. ��� ��������� 0b0100111 = 0x27 ��� ������ �������
volatile uint8_t i2c_STATUS = 0;
volatile uint8_t i2c_Buffer[i2c_MaxBuffer];			// ����� ��� ������ ������ � ������ Master
volatile uint8_t i2c_index;							// ������ ����� ������
volatile uint8_t i2c_ByteCount;						// ����� ���� ������������
volatile uint8_t LCD_Light = 1;						// ��������� ������� 0 ��� 1

#define LCD_RS		0
#define LCD_RW		1
#define LCD_E		2
#define LCD_LED		3

//===============================================================================
#define LCD_CMD				0		//��������� �������
#define LCD_DATA			1		//��������� ������
//===============================================================================
char* LabelERR PROGMEM = "������";
char* Welcome_1_row PROGMEM = "Yaroslavskiy";
char* Welcome_2_row PROGMEM = "BEVERAGE FACTORY";
char* Welcome_4_row PROGMEM = "Strobe v1.0";
// char* Label_time PROGMEM = "������(ms): ";
char* Label_time PROGMEM = "������(%): ";
char* Label_shift PROGMEM = "�����(ms): ";

char* row_1 PROGMEM = "01234567890123456789";

// volatile uint8_t STATUS = 0;
// #define ST_BLC      		0
// #define ST_BTN      		1		//���� ������� �� �������
// #define ST_BTN_WAIT 		2		//�����������
// #define ST_MENU     		3		//0 - ������, ����� �� ������� ����������� ���������� 1 - ����� ����
// #define ST_WORK_PAUSE_HIGH	4		//������ �� ����� ������� ������
// #define ST_WORK_PAUSE_LOW	5		//������ �� ����� ������ ������
// #define ST_WORK_PAUSE_STOP	6		//������ �� ����� �� �����

// volatile uint8_t BUTTON = 0;
// #define MMM      0		//������ �
// #define PLS      1		//������ +
// #define MIN      2		//������ -

// #define MUL_BTN_WAIT	10	//��������� �� 16.4��� ����������� ������
// volatile uint8_t CountMUL_BTN_WAIT = 0;

// volatile uint8_t MENU = 0;	//������� ������� ���� (������. �� 0 �� 11 ������������)
// #define MUL_MENU_WAIT	10	//��������� �� ~1���, �������� ������ �� ����
// volatile uint8_t CountMUL_MENU_WAIT = 0;


// volatile uint8_t DS_TempData[9];
// volatile double dbDS_OUT;				//����� "�����"
// volatile double dbDS_ROOM;				//����� "�������"
// volatile double dbDS_SERVE;				//����� "������"
// volatile double dbDS_RETURN;			//����� "�������"
// volatile uint8_t STATUS_DS_OUT;
// volatile uint8_t STATUS_DS_ROOM;
// volatile uint8_t STATUS_DS_SERVE;
// volatile uint8_t STATUS_DS_RETURN;
// /**  ������� �1 - �4
	// STATUS_DS ������� ��������� ������� DS18B20
	// 0 - �������������� ��������� (���������) ��� ������
	// 1 - ���������, ���� ���������� �������� ����������� � �������� DS_Temp (double)
// */
// volatile uint8_t STATUS_TC = 0;
// volatile uint16_t VALUE_TC = 0;
// /**  ������ �5
	// STATUS_TC ������� ��������� ������� �5 (��������� �-����)
	// 0 - �������������� ��������� (���������)
	// 1 - ���������, ���� ���������� �������� ����������� => �������� � �������� � �������� VALUE_TC1
	// 2 - ����� �������
	// 3 - ���������� ������������� �������� (������ 999 ��. �� �������)
// */

// volatile uint8_t BOILER_STATUS = 10;	//������� ��������� �����
// /**  
	// 0 - �������������� ���������
	// 1 - ��������
		// VALUE_TC <= SETVAL_TEMP_BOILER_OFF ����������� �������� ������ ����������� ������� ���������� ���������� �����
			// � ���� ������ ���� ���������� �������������� �������� ������ �������� ��������� ����� �����
			// DS_Temp4(�������) <= EE_SETVAL_TEMP_TEN_ON � ���������� ����� ����� DS_Temp4(�������) >= SETVAL_TEMP_TEN_OFF
	// 2 - ������ �������
	// 3 - ����������
	// 4 - ������
		// ��������� ������ �� �������� TC, DS2, DS3, DS4 ����� ������ ��� ����������
	// 5 - �����
	// 6 - ������
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

// volatile uint8_t FLAP_STATE = 0;		//������� ��������� ��� (0 - 3)
// volatile int16_t FLAP_STEPS = 0;		//������� ��������� � ����� (0 - 250)
// #define FLAP_STEP_MAX	250

// #define time_flap	5
// #define FLAP_INIT		3	//������� �� ���� �������� ���������� �� FLAP_STEPS
// #define FLAP_START		2	//������� �� ���� ��������
// #define FLAP_FORVARD	1	//��������� ��������
// #define FLAP_REVERCE	0	//��������� ��������

// volatile uint16_t Count_PAUSE_SEC = 0;
// volatile uint16_t EXTREMUM = 0;
// #define DELTA_EXTREMUM	2
// volatile int8_t ALARM_TRIGGER = 0;		//1 - ���������� ��������� ����������� ������������ � ���������� ����
// #define ALARM_TRIGGER_OFF		0
// #define ALARM_TRIGGER_ON		1
// //===============================================================================
// // ����������� ������� � ����������
// volatile uint8_t SETVAL_AUTO_CONTROL;			// �������������� ����������� / ������	������ � ���� - 0
// uint8_t EEMEM EE_SETVAL_AUTO_CONTROL = 1;		// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_AUTO_CONTROL_MAN	0			// ������ �����������
// #define DEF_SETVAL_AUTO_CONTROL_AUTO	1		// �������������� �����������
// volatile uint8_t SETVAL_FLAP_MANUAL_STEP;		// ���������� ����� ��������� �������� � ������ ������	������ � ���� - 1
// uint8_t EEMEM EE_SETVAL_FLAP_MANUAL_STEP = 5;	// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_FLAP_MANUAL_STEP_MIN	1		//��
// #define DEF_SETVAL_FLAP_MANUAL_STEP_MAX	25		//��
// #define DEF_SETVAL_FLAP_MANUAL_STEP_STEP	1	//���
// volatile uint8_t SETVAL_SMOKE_DEAD_BAND;		// ���� ������������������ ������� �������� � ������ ������� (����� �������)	������ � ���� - 2
// uint8_t EEMEM EE_SETVAL_SMOKE_DEAD_BAND = 5;	// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_SMOKE_DEAD_BAND_MIN	1		//��
// #define DEF_SETVAL_SMOKE_DEAD_BAND_MAX	20		//��
// #define DEF_SETVAL_SMOKE_DEAD_BAND_STEP	1		//���
// volatile uint8_t SETVAL_FLAP_AUTO_STEP;			// ���������� ����� ��������� �������� � �������������� ������	������ � ���� - 3
// uint8_t EEMEM EE_SETVAL_FLAP_AUTO_STEP = 5;		// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_FLAP_AUTO_STEP_MIN	1		//��
// #define DEF_SETVAL_FLAP_AUTO_STEP_MAX	25		//��
// #define DEF_SETVAL_FLAP_AUTO_STEP_STEP	1		//���
// volatile uint8_t SETVAL_FLAP_START_STEPS;		// ��������� ��������� �������� � %	������ � ���� - 4
// uint8_t EEMEM EE_SETVAL_FLAP_START_STEPS = 30;	// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_FLAP_START_STEPS_MIN	5		//��
// #define DEF_SETVAL_FLAP_START_STEPS_MAX	50		//��
// #define DEF_SETVAL_FLAP_START_STEPS_STEP	1	//���

// volatile uint8_t SETVAL_TEMP_SMOKE;				// ����������� ����� �������� (����� �������) 	������ � ���� - 5
// uint8_t EEMEM EE_SETVAL_TEMP_SMOKE = 200;		// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_TEMP_SMOKE_MIN	100			//��
// #define DEF_SETVAL_TEMP_SMOKE_MAX	255			//��
// #define DEF_SETVAL_TEMP_SMOKE_STEP	5			//���
// volatile uint8_t SETVAL_MAX_TEMP_SERVE;			// ������������ ����������� ������ (����� �������)	������ � ���� - 6
// uint8_t EEMEM EE_SETVAL_MAX_TEMP_SERVE = 80;	// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_MAX_TEMP_SERVE_MIN	40		//��
// #define DEF_SETVAL_MAX_TEMP_SERVE_MAX	95		//��
// #define DEF_SETVAL_MAX_TEMP_SERVE_STEP	1		//���
// volatile uint8_t SETVAL_MAX_TEMP_ROOM;			// ������������ ����������� ������� (����� �������)	������ � ���� - 7
// uint8_t EEMEM EE_SETVAL_MAX_TEMP_ROOM = 22;		// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_MAX_TEMP_ROOM_MIN	15		//��
// #define DEF_SETVAL_MAX_TEMP_ROOM_MAX	28		//��
// #define DEF_SETVAL_MAX_TEMP_ROOM_STEP	1		//���
// volatile uint8_t SETVAL_TEMP_BOILER_OFF;		// ����������� �������� ���������� ���������� ����� (����� �������)	������ � ���� - 8
// uint8_t EEMEM EE_SETVAL_TEMP_BOILER_OFF = 60;	// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_TEMP_BOILER_OFF_MIN	20		//��
// #define DEF_SETVAL_TEMP_BOILER_OFF_MAX	70		//��
// #define DEF_SETVAL_TEMP_BOILER_OFF_STEP	5		//���

// volatile uint8_t SETVAL_LIGHT_ALL_ON;			// ������ ����������	������ � ���� - 9
// uint8_t EEMEM EE_SETVAL_LIGHT_ALL_ON = 1;		// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_LIGHT_AUTO	0				// ��������� �� ������� ����������� / � ������
// #define DEF_SETVAL_LIGHT_ALL_ON	1				// ������ �������
// volatile uint8_t SETVAL_ALARM_FUEL_ON;			// ������������ ���������� �������	������ � ���� - 10
// uint8_t EEMEM EE_SETVAL_ALARM_FUEL_ON = 1;		// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_ALARM_FUEL_OFF	0			// ���������
// #define DEF_SETVAL_ALARM_FUEL_ON	1			// ��������
// volatile uint8_t SETVAL_TEMP_ALARM_FUEL;		// ����������� ������������ ���������� ������� (����� �������)	������ � ���� - 11
// uint8_t EEMEM EE_SETVAL_TEMP_ALARM_FUEL = 150;	// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_TEMP_ALARM_FUEL_MIN	80		//��
// #define DEF_SETVAL_TEMP_ALARM_FUEL_MAX	150		//��
// #define DEF_SETVAL_TEMP_ALARM_FUEL_STEP	5		//���

// volatile uint8_t SETVAL_AUTO_HEAT;				// �������������� �������� ������	������ � ���� - 12
// uint8_t EEMEM EE_SETVAL_AUTO_HEAT = 1;			// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_AUTO_HEAT_OFF	0			// �������� ��������
// #define DEF_SETVAL_AUTO_HEAT_ON	1				// �������������� �������� �������
// volatile uint8_t SETVAL_TEMP_TEN_ON;			// ����������� ��������� ����� ��������� �������� (����� �������)	������ � ���� - 13
// uint8_t EEMEM EE_SETVAL_TEMP_TEN_ON = 10;		// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_TEMP_TEN_ON_MIN	5			//��
// #define DEF_SETVAL_TEMP_TEN_ON_MAX	25			//��
// #define DEF_SETVAL_TEMP_TEN_ON_STEP	1			//���
// volatile uint8_t SETVAL_TEMP_TEN_OFF;			// ����������� ���������� ����� ��������� �������� (����� �������)	������ � ���� - 14
// uint8_t EEMEM EE_SETVAL_TEMP_TEN_OFF = 15;		// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_TEMP_TEN_OFF_MIN	6			//��
// #define DEF_SETVAL_TEMP_TEN_OFF_MAX	30			//��
// #define DEF_SETVAL_TEMP_TEN_OFF_STEP	1		//���
// volatile uint8_t SETVAL_DELAY_PAUSE;			// �������� � ������������� � ������ ����� (����� ������)	������ � ���� - 15
// uint8_t EEMEM EE_SETVAL_DELAY_PAUSE = 3;		// ��������� �������� ����������� � EEPROM
// #define DEF_SETVAL_DELAY_PAUSE_MIN	1			//��
// #define DEF_SETVAL_DELAY_PAUSE_MAX	10			//��
// #define DEF_SETVAL_DELAY_PAUSE_STEP	1			//���
// //===============================================================================
// // const char* LabelHeader PROGMEM = "Boiler2 v2.0 18.09.2020";
// // char* LabelT_out PROGMEM = "�����: ";
// // char* LabelT_room PROGMEM = "�������: ";
// // char* LabelT_serve PROGMEM = "������: ";
// // char* LabelT_return PROGMEM = "�������: ";
// // char* LabelT_smoke PROGMEM = "�������: ";
// // char* Label_Flap PROGMEM = "�������� ����: ";
// // char* Label_Sunro PROGMEM = "�����: ";
// // char* Label_Pump PROGMEM = "�����: ";
// char* LabelUNC PROGMEM = "UNC";
// // // char* LabelBRK PROGMEM = "BREAK";
// char* LabelBRK PROGMEM = "-----";
// char* LabelOVR PROGMEM = "OVER";
// char* LabelERR PROGMEM = "ERROR";
// // // char* LabelSetting PROGMEM = "���������";
// //===============================================================================
// #define DS18B20_SEARCH_ROM 		0xF0	//����� ������� ���� ��������� �� �������������
// #define DS18B20_READ_ROM 		0x33	//����������� ������ ������������� ����������
// #define DS18B20_MATCH_ROM 		0x55	//��������� ����������� ���������� �� ��� ������
// #define DS18B20_SKIP_ROM 		0xCC	//��������� � ������������� �� ���� ���������� ��� �������� ��� ������
// #define DS18B20_ALARM_SEARCH 	0xEC	//����� ���������, � ������� �������� ALARM (�������� ������ ��� � CMD_SERCH_ROM)
// #define DS18B20_CONVERT_T 		0x44	//����� �������������� �����������
// #define DS18B20_W_SCRATCHPAD 	0x4E	//������ �� ���������� ����� (��������)
// #define DS18B20_R_SCRATCHPAD 	0xBE	//������ ����������� ������ (���������)
// #define DS18B20_C_SCRATCHPAD 	0x48	//���������� ��������� � EEPROM 
// #define DS18B20_RECALL_EE 		0xB8	//������� � ����� �� EEPROM �������� ������ ALARM
// #define DS18B20_READ_POWER 		0xB4	//�����������, ���� �� � ���� ���������� � ���������� ��������
// #define DS18B20_RES_9BIT 		0x1F	//���������� ������� (9 ���)
// #define DS18B20_RES_10BIT 		0x3F	//���������� ������� (10 ���)
// #define DS18B20_RES_11BIT 		0x5F	//���������� ������� (11 ���)
// #define DS18B20_RES_12BIT 		0x7F	//���������� ������� (12 ���)
// #define CRC8INIT				0x00
// #define CRC8POLY				0x18	//0X18 = X^8+X^5+X^4+X^0
//===============================================================================
// BOARD
//===============================================================================
// LED L �� �����
#define PORT_LED_L PORTB
#define DDR_LED_L DDRB
#define PIN_LED_L PINB
#define B_LED_L 5

// ���� I2C
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
void I2C_SendChar(char ch, uint8_t cmd);	// �������� ����� � ��������� �� ��������� �� ������������� �
void LCD_send_poluChar(uint8_t pch, uint8_t cmd);
void LCD_write_string(uint8_t row, uint8_t pos, char* str);
void LCD_ClearDisplay(void);
// void LCD_send(uint8_t rs, uint8_t rw, uint8_t ld, uint8_t bt);
// void CheckButton(void);
// void ExecuteButton(void);
// void FlapTravel(uint8_t direct, uint16_t steps);
// void OutFullInfoToLCD(void);	//����� ����������� ��������� �� ������� (��������� ������� ������)
// void OutVarInfoToLCD(void);	//����� ����������� ��������� �� ������� (������ ����������)
// void OutTemperatureDS(uint8_t dat, uint16_t x, uint16_t y);	//����� �� ������� �������� ����������� ������� DS18B20
// void ReadMAX6675(void);	//������ ����������� � VALUE_TC � STATUS_TC
// void OutTemperatureTC(uint16_t x, uint16_t y);	//����� �� ������� �������� ����������� ������� TC
// void OutPercent(uint16_t value, uint16_t max_value, uint16_t x, uint16_t y);		//����� �� ������� �������� � ���������: value - ������� ��������; max_value - �������� ��� 100%
// void LoadValuesFromEEPROM(void);
// void UpdateValuesFromEEPROM(void);
// void OutMenuToLCD(void);	//����� ���� � ������� �� �������
// void OutMenuToLCDValue(void);	//����� ������� ����
// uint16_t OutNumber(uint8_t val, uint16_t x, uint16_t y);
// uint16_t OutBigNumber(uint16_t val, uint16_t x, uint16_t y);
// void Work(void);	//������ � ������

//===============================================================================
// uint8_t DS18B20_init(uint8_t dat);	//Out: 0 - OK; 1 - ��� �������
// uint8_t DS18B20_send(uint8_t dat, uint8_t sbyte);	//���� ������ ����� 0�FF, �� �� ������ ����� �������� ����
// void DS18B20_convertTemp(uint8_t dat);	//�������� ������� �������������� �����������.
// void DS18B20_getTemp(uint8_t dat);	//������, ��������� � ���������� �����������
// uint8_t DS18B20_read(uint8_t dat);	//��������� 9 ������ � �����, ������������ CRC. Out: 0 - OK, 1 - error CRC
// uint8_t DS_calcCRC8(uint8_t data, uint8_t crc);	//Out: CRC
// // void DS18B20_SetResolution(uint8_t numBit);	//��������� ���������� �������, �� ��������� ������������ ���������� 12 ���
//===============================================================================
// char GetHex(uint8_t b);
// void Work_T12_M12(void);	//������ � ������ ������� � ��������� �1 � �2 � ������������� �1 � �2
// void Work_T3_M3(void);	//������ � ������ ������� � �������� �3 � ������������ �3
// uint8_t OutBigNumber(uint16_t val);	//����� ���������� �������� ������� �� �������
// uint8_t CalculatePercent(uint8_t diskr);

//===============================================================================

/**
	������� ���������� ��������������� ������ �������� ��-20
	�������:
		�1 - DS18B20 �� +125��.� => �������� ����������� � ���������.
		�2 - DS18B20 �� +125��.� => �������� ����������� � ���������.
		�3 - DS18B20 �� +125��.� => �������� ����������� � ���������.
		�4 - DS18B20 �� +125��.� => �������� ����������� � ���������.
		�5 - ��������� �-���� (�������-�������) �� 999��.� => �������� ����������� ������� �����.
	// �����������: (������� ���� 12 �����, �������� 6-12��)
		// �1 => ������ ������� � ��������������� ������������.
		// �2 => ������ ������� � �������� �����.
		// �3 => ������ ������� � ������ ������ ���������� �����.

	// ��������� � ����������:
		// �������� �� ������� 84�48����.
			// � ���������� ������ ���������� ����������� � ��������� ���� ��������
			// � ��������� ������������ � % ���������� �������� ���������� ������
			// � ������ ��������� ��������� ����������� � �������������� ������� ������ ��������
		// ���������:
			// 2 ������: ��������������� ������� (1 ��� � �������) - ������� ��������, �������� ��������
					  // ��������������� ���������� (1 ��� � �������) - ������� �������.

		// ��� ������: "�", "+", "-" 
			// "�" - ����  ���� ��������� � �������������� ���������� �� ������.
			// "+" � "-" - � ������ ��������� ��������� ���������������� ��������� �������
				// � ���������� ������ ��� � ���� ��������� ��� ��������� ������
			// ����� �� ������ ���� - 10 ������ ��� ������� �� ������.
	
	// �������� ������:
	// ������ �������� ������� ������� �� 2 ����������� �������.
		// 1 ������: ������� �1, �2 � ����������� �1, �2
		// 2 ������: ������ �3 � ���������� �3

		// 1 ������ ���������� � ������ ����� �������� �2 - �1 ������ �������� �������
		// � ����������� �������������� ����� �������� �2 - �1 ������ �������.

		// ��������� ������� ����������� �1 � �2:
			// ������ �1 �� ������ (�������) �� 100% � ������� ������� ������� � ���.
			// �������� 30 ������
			// ������ �2 �� ������ (�������) �� 100% � ������� 30 ������

		// ��������� ��������� ������������ �1 � �2:
			// ���������� ����������� �2
			// �������� 15 ������
			// ������� ��������� ����������� �1 � ������� ������� ������� � ���.
			
		// ������� ������� �1-�2:
			// ����������� �1 ������ ��� ����� (������� - ������)
			// �
			// ����������� �2 ������ ��� ����� (������� - ������)
			
		// ������� ��������� �1-�2:
			// ����������� �1 ���� �2 �������� ��� ���� ����� �������

		// 2 ������ ������� ������, ���������� �3 ���������� � ������ � ��������� ����� �������
		// ��� ���������� �3 ����������� "����� �������" � ��������������� ����������� ��������
		// � ������ ����������� �3. �� 100% �������� ���������� ������� ��� ���������� �3 
		// ����������� "������ �������" � ���������� �������� �� ���� �������� � ������ 
		// ����������� ����� ����������� �3. ��� �������� ����������� �3 � ���������
		// "������ �������" - "����� �������" �3 ��������������� ��������� �������� �� ������ ���������.

*/
























