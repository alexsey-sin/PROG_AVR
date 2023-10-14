/**
	������� ���������� ��������������� ������ �������� ��-20
	�������:
		�1 - DS18B20 �� +125��.� => �������� ����������� "�����".
		�2 - DS18B20 �� +125��.� => �������� ����������� "�������".
		�3 - DS18B20 �� +125��.� => �������� ����������� "������".
		�4 - DS18B20 �� +125��.� => �������� ����������� "�������".
		�5 - ��������� �-���� (�������-�������) �� 999��.� => �������� ����������� ������� �����.


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
#define ST_BTN      		1		//���� ������� �� �������
#define ST_BTN_WAIT 		2		//�����������
#define ST_MENU     		3		//0 - ������, ����� �� ������� ����������� ���������� 1 - ����� ����
#define ST_WORK_PAUSE_HIGH	4		//������ �� ����� ������� ������
#define ST_WORK_PAUSE_LOW	5		//������ �� ����� ������ ������
#define ST_WORK_PAUSE_STOP	6		//������ �� ����� �� �����

volatile uint8_t BUTTON = 0;
#define MMM      0		//������ �
#define PLS      1		//������ +
#define MIN      2		//������ -

#define MUL_BTN_WAIT	10	//��������� �� 16.4��� ����������� ������
volatile uint8_t CountMUL_BTN_WAIT = 0;

volatile uint8_t MENU = 0;	//������� ������� ���� (������. �� 0 �� 15 ������������)
#define MUL_MENU_WAIT	10	//��������� �� ~1���, �������� ������ �� ����
volatile uint8_t CountMUL_MENU_WAIT = 0;


volatile uint8_t DS_TempData[9];
volatile double dbDS_OUT;				//����� �1 "�����"
volatile double dbDS_ROOM;				//����� �2 "�������"
volatile double dbDS_SERVE;				//����� �3 "������"
volatile double dbDS_RETURN;			//����� �4 "�������"
volatile uint8_t STATUS_DS_OUT;
volatile uint8_t STATUS_DS_ROOM;
volatile uint8_t STATUS_DS_SERVE;
volatile uint8_t STATUS_DS_RETURN;
/**  ������� �1 - �4
	STATUS_DS ������� ��������� ������� DS18B20
	0 - �������������� ��������� (���������) ��� ������
	1 - ���������, ���� ���������� �������� ����������� � �������� DS_Temp (double)
*/
volatile uint8_t STATUS_TC = 0;
volatile uint16_t VALUE_TC = 0;
/**  ������ �5
	STATUS_TC ������� ��������� ������� �5 (��������� �-����)
	0 - �������������� ��������� (���������)
	1 - ���������, ���� ���������� �������� ����������� => �������� � �������� � �������� VALUE_TC1
	2 - ����� �������
	3 - ���������� ������������� �������� (������ 999 ��. �� �������)
*/

volatile uint8_t BOILER_STATUS = 10;	//������� ��������� �����
/**  
	0 - �������������� ���������
	1 - ��������
		VALUE_TC <= SETVAL_TEMP_BOILER_OFF ����������� �������� ������ ����������� ������� ���������� ���������� �����
			� ���� ������ ���� ���������� �������������� �������� ������ �������� ��������� ����� �����
			DS_Temp4(�������) <= EE_SETVAL_TEMP_TEN_ON � ���������� ����� ����� DS_Temp4(�������) >= SETVAL_TEMP_TEN_OFF
	2 - ������ �������
	3 - ����������
	4 - ������
		��������� ������ �� �������� TC, DS2, DS3, DS4 ����� ������ ��� ����������
	5 - �����
	6 - ������
*/
#define BOILER_STATUS_UNKNOWN		0
#define BOILER_STATUS_IDLE			1
#define BOILER_STATUS_AUTO			2
#define BOILER_STATUS_STOP_ROOM		3	//��������� �� ��������� �������
#define BOILER_STATUS_STOP_COOLANT	4	//��������� �� ��������� �������������
#define BOILER_STATUS_ERROR			5
#define BOILER_STATUS_PAUSE			6
#define BOILER_STATUS_MANUAL		7

// volatile uint8_t *PORT_Reg;
volatile uint8_t *DDR_Reg;
volatile uint8_t *PIN_Reg;

volatile uint8_t FLAP_STATE = 0;		//������� ��������� ��� (0 - 3)
volatile int16_t FLAP_STEPS = 0;		//������� ��������� � ����� (0 - 250)
#define FLAP_STEP_MAX	250

#define time_flap	5
#define FLAP_INIT		3	//������� �� ���� �������� ���������� �� FLAP_STEPS
#define FLAP_START		2	//������� �� ���� ��������
#define FLAP_FORVARD	1	//��������� ��������
#define FLAP_REVERCE	0	//��������� ��������

volatile uint16_t Count_PAUSE_SEC = 0;
volatile uint16_t EXTREMUM = 0;
#define DELTA_EXTREMUM	2
volatile int8_t ALARM_TRIGGER = 0;		//1 - ���������� ��������� ����������� ������������ � ���������� ����
#define ALARM_TRIGGER_OFF		0
#define ALARM_TRIGGER_ON		1
volatile int8_t ERROR_ALARM_TRIGGER = 1;		//1 - ���������� ��������� ����������� ������������ �� ������ ��������
#define ERROR_ALARM_TRIGGER_OFF		0
#define ERROR_ALARM_TRIGGER_ON		1
//===============================================================================
// ����������� ������� � ����������
// ������ � ���� - 0
volatile uint8_t SETVAL_AUTO_CONTROL;			// �������������� ����������� / ������	
uint8_t EEMEM EE_SETVAL_AUTO_CONTROL = 1;		// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_AUTO_CONTROL_MAN	0			// ������ �����������
#define DEF_SETVAL_AUTO_CONTROL_AUTO	1		// �������������� �����������
// ������ � ���� - 1
volatile uint8_t SETVAL_FLAP_MANUAL_STEP;		// ���������� ����� ��������� �������� � ������ ������	
uint8_t EEMEM EE_SETVAL_FLAP_MANUAL_STEP = 5;	// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_FLAP_MANUAL_STEP_MIN	1		//��
#define DEF_SETVAL_FLAP_MANUAL_STEP_MAX	25		//��
#define DEF_SETVAL_FLAP_MANUAL_STEP_STEP	1	//���
// ������ � ���� - 2
volatile uint8_t SETVAL_SMOKE_DEAD_BAND;		// ���� ������������������ ������� �������� � ������ ������� (����� �������)
uint8_t EEMEM EE_SETVAL_SMOKE_DEAD_BAND = 5;	// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_SMOKE_DEAD_BAND_MIN	1		//��
#define DEF_SETVAL_SMOKE_DEAD_BAND_MAX	20		//��
#define DEF_SETVAL_SMOKE_DEAD_BAND_STEP	1		//���
// ������ � ���� - 3
volatile uint8_t SETVAL_FLAP_AUTO_STEP;			// ���������� ����� ��������� �������� � �������������� ������	
uint8_t EEMEM EE_SETVAL_FLAP_AUTO_STEP = 5;		// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_FLAP_AUTO_STEP_MIN	1		//��
#define DEF_SETVAL_FLAP_AUTO_STEP_MAX	25		//��
#define DEF_SETVAL_FLAP_AUTO_STEP_STEP	1		//���
// ������ � ���� - 4
volatile uint8_t SETVAL_FLAP_START_STEPS;		// ��������� ��������� �������� � %	
uint8_t EEMEM EE_SETVAL_FLAP_START_STEPS = 30;	// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_FLAP_START_STEPS_MIN	5		//��
#define DEF_SETVAL_FLAP_START_STEPS_MAX	50		//��
#define DEF_SETVAL_FLAP_START_STEPS_STEP	1	//���
// ������ � ���� - 5
volatile uint8_t SETVAL_TEMP_SMOKE;				// ����������� ����� �������� (����� �������)
uint8_t EEMEM EE_SETVAL_TEMP_SMOKE = 230;		// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_TEMP_SMOKE_MIN	100			//��
#define DEF_SETVAL_TEMP_SMOKE_MAX	255			//��
#define DEF_SETVAL_TEMP_SMOKE_STEP	5			//���
// ������ � ���� - 6
volatile uint8_t SETVAL_MAX_TEMP_SERVE;			// ������������ ����������� ������ (����� �������)
uint8_t EEMEM EE_SETVAL_MAX_TEMP_SERVE = 80;	// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_MAX_TEMP_SERVE_MIN	40		//��
#define DEF_SETVAL_MAX_TEMP_SERVE_MAX	95		//��
#define DEF_SETVAL_MAX_TEMP_SERVE_STEP	1		//���
#define DEF_SETVAL_MAX_TEMP_SERVE_DELTA	10		//���������� ������������ ����������� ������ (����)
// ������ � ���� - 7
volatile uint8_t SETVAL_MAX_TEMP_ROOM;			// ������������ ����������� ������� (����� �������)	
uint8_t EEMEM EE_SETVAL_MAX_TEMP_ROOM = 22;		// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_MAX_TEMP_ROOM_MIN	15		//��
#define DEF_SETVAL_MAX_TEMP_ROOM_MAX	28		//��
#define DEF_SETVAL_MAX_TEMP_ROOM_STEP	1		//���
#define DEF_SETVAL_MAX_TEMP_ROOM_DELTA	2		//���������� ������������ ����������� ������� (����)
// ������ � ���� - 8
volatile uint8_t SETVAL_TEMP_BOILER_OFF;		// ����������� �������� ���������� ���������� ����� (����� �������)	
uint8_t EEMEM EE_SETVAL_TEMP_BOILER_OFF = 50;	// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_TEMP_BOILER_OFF_MIN	20		//��
#define DEF_SETVAL_TEMP_BOILER_OFF_MAX	70		//��
#define DEF_SETVAL_TEMP_BOILER_OFF_STEP	5		//���
// ������ � ���� - 9
volatile uint8_t SETVAL_LIGHT_ALL_ON;			// ������ ����������
uint8_t EEMEM EE_SETVAL_LIGHT_ALL_ON = 1;		// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_LIGHT_AUTO	0				// ��������� �� ������� ����������� / � ������
#define DEF_SETVAL_LIGHT_ALL_ON	1				// ������ �������
// ������ � ���� - 10
volatile uint8_t SETVAL_ALARM_FUEL_ON;			// ������������ ���������� �������
uint8_t EEMEM EE_SETVAL_ALARM_FUEL_ON = 1;		// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_ALARM_FUEL_OFF	0			// ���������
#define DEF_SETVAL_ALARM_FUEL_ON	1			// ��������
// ������ � ���� - 11
volatile uint8_t SETVAL_TEMP_ALARM_FUEL;		// ����������� ������������ ���������� ������� (����� �������)
uint8_t EEMEM EE_SETVAL_TEMP_ALARM_FUEL = 150;	// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_TEMP_ALARM_FUEL_MIN	80		//��
#define DEF_SETVAL_TEMP_ALARM_FUEL_MAX	150		//��
#define DEF_SETVAL_TEMP_ALARM_FUEL_STEP	5		//���
// ������ � ���� - 12
volatile uint8_t SETVAL_AUTO_HEAT;				// �������������� �������� ������	
uint8_t EEMEM EE_SETVAL_AUTO_HEAT = 1;			// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_AUTO_HEAT_OFF	0			// �������� ��������
#define DEF_SETVAL_AUTO_HEAT_ON	1				// �������������� �������� �������
// ������ � ���� - 13
volatile uint8_t SETVAL_TEMP_TEN_ON;			// ����������� ��������� ����� ��������� �������� (����� �������)	������ � ���� - 13
uint8_t EEMEM EE_SETVAL_TEMP_TEN_ON = 10;		// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_TEMP_TEN_ON_MIN	5			//��
#define DEF_SETVAL_TEMP_TEN_ON_MAX	25			//��
#define DEF_SETVAL_TEMP_TEN_ON_STEP	1			//���
// ������ � ���� - 14
volatile uint8_t SETVAL_TEMP_TEN_OFF;			// ����������� ���������� ����� ��������� �������� (����� �������)	������ � ���� - 14
uint8_t EEMEM EE_SETVAL_TEMP_TEN_OFF = 15;		// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_TEMP_TEN_OFF_MIN	6			//��
#define DEF_SETVAL_TEMP_TEN_OFF_MAX	30			//��
#define DEF_SETVAL_TEMP_TEN_OFF_STEP	1		//���
// ������ � ���� - 15
volatile uint8_t SETVAL_DELAY_PAUSE;			// �������� � ������������� � ������ ����� (����� ������)	������ � ���� - 15
uint8_t EEMEM EE_SETVAL_DELAY_PAUSE = 3;		// ��������� �������� ����������� � EEPROM
#define DEF_SETVAL_DELAY_PAUSE_MIN	1			//��
#define DEF_SETVAL_DELAY_PAUSE_MAX	10			//��
#define DEF_SETVAL_DELAY_PAUSE_STEP	1			//���
//===============================================================================
char* LabelUNC PROGMEM = "UNC";
char* LabelBRK PROGMEM = "-----";
char* LabelOVR PROGMEM = "OVER";
char* LabelERR PROGMEM = "ERROR";
//===============================================================================
#define DS18B20_SEARCH_ROM 		0xF0	//����� ������� ���� ��������� �� �������������
#define DS18B20_READ_ROM 		0x33	//����������� ������ ������������� ����������
#define DS18B20_MATCH_ROM 		0x55	//��������� ����������� ���������� �� ��� ������
#define DS18B20_SKIP_ROM 		0xCC	//��������� � ������������� �� ���� ���������� ��� �������� ��� ������
#define DS18B20_ALARM_SEARCH 	0xEC	//����� ���������, � ������� �������� ALARM (�������� ������ ��� � CMD_SERCH_ROM)
#define DS18B20_CONVERT_T 		0x44	//����� �������������� �����������
#define DS18B20_W_SCRATCHPAD 	0x4E	//������ �� ���������� ����� (��������)
#define DS18B20_R_SCRATCHPAD 	0xBE	//������ ����������� ������ (���������)
#define DS18B20_C_SCRATCHPAD 	0x48	//���������� ��������� � EEPROM 
#define DS18B20_RECALL_EE 		0xB8	//������� � ����� �� EEPROM �������� ������ ALARM
#define DS18B20_READ_POWER 		0xB4	//�����������, ���� �� � ���� ���������� � ���������� ��������
#define DS18B20_RES_9BIT 		0x1F	//���������� ������� (9 ���)
#define DS18B20_RES_10BIT 		0x3F	//���������� ������� (10 ���)
#define DS18B20_RES_11BIT 		0x5F	//���������� ������� (11 ���)
#define DS18B20_RES_12BIT 		0x7F	//���������� ������� (12 ���)
#define CRC8INIT				0x00
#define CRC8POLY				0x18	//0X18 = X^8+X^5+X^4+X^0
//===============================================================================
// BOARD
//===============================================================================
// ������
#define PORT_PLS PORTB
#define DDR_PLS DDRB
#define PIN_PLS PINB
#define B_PLS 0

#define PORT_MIN PORTA
#define DDR_MIN DDRA
#define PIN_MIN PINA
#define B_MIN 0

// �/� ���������� ������� ���������� ��������(FLAP) TLE4729G
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

// ������� DS18B20
//����� �1 "�����"
#define PORT_DS_OUT PORTD
#define DDR_DS_OUT DDRD
#define PIN_DS_OUT PIND
#define B_DS_OUT 1

//����� �2 "�������"
#define PORT_DS_ROOM PORTD
#define DDR_DS_ROOM DDRD
#define PIN_DS_ROOM PIND
#define B_DS_ROOM 2

//����� �3 "������"
#define PORT_DS_SRV PORTD
#define DDR_DS_SRV DDRD
#define PIN_DS_SRV PIND
#define B_DS_SRV 3

//����� �4 "�������"
#define PORT_DS_RTN PORTD
#define DDR_DS_RTN DDRD
#define PIN_DS_RTN PIND
#define B_DS_RTN 4

//����� �5 ������ ������� ����� - ��������� �� MAX6675
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

//Beep ������ ��������
#define PORT_BEEP PORTB
#define DDR_BEEP DDRB
#define PIN_BEEP PINB
#define B_BEEP 1

//Preheating ���� ��������� ����� ���������
#define PORT_PHEAT PORTB
#define DDR_PHEAT DDRB
#define PIN_PHEAT PINB
#define B_PHEAT 3
//===============================================================================
void init(void);
void CheckButton(void);
void ExecuteButton(void);
void FlapTravel(uint8_t direct, uint16_t steps);
void OutFullInfoToLCD(void);	//����� ����������� ��������� �� ������� (��������� ������� ������)
void OutVarInfoToLCD(void);	//����� ����������� ��������� �� ������� (������ ����������)
void OutTemperatureDS(uint8_t dat, uint16_t x, uint16_t y);	//����� �� ������� �������� ����������� ������� DS18B20
void ReadMAX6675(void);	//������ ����������� � VALUE_TC � STATUS_TC
void OutTemperatureTC(uint16_t x, uint16_t y);	//����� �� ������� �������� ����������� ������� TC
void OutPercent(uint16_t value, uint16_t max_value, uint16_t x, uint16_t y);		//����� �� ������� �������� � ���������: value - ������� ��������; max_value - �������� ��� 100%
void LoadValuesFromEEPROM(void);
void UpdateValuesFromEEPROM(void);
void OutMenuToLCD(void);	//����� ���� � ������� �� �������
void OutMenuToLCDValue(void);	//����� ������� ����
uint16_t OutNumber(uint8_t val, uint16_t x, uint16_t y);
uint16_t OutBigNumber(uint16_t val, uint16_t x, uint16_t y);
void Work(void);	//������ � ������

//===============================================================================
uint8_t DS18B20_init(uint8_t dat);	//Out: 0 - OK; 1 - ��� �������
uint8_t DS18B20_send(uint8_t dat, uint8_t sbyte);	//���� ������ ����� 0�FF, �� �� ������ ����� �������� ����
void DS18B20_convertTemp(uint8_t dat);	//�������� ������� �������������� �����������.
void DS18B20_getTemp(uint8_t dat);	//������, ��������� � ���������� �����������
uint8_t DS18B20_read(uint8_t dat);	//��������� 9 ������ � �����, ������������ CRC. Out: 0 - OK, 1 - error CRC
uint8_t DS_calcCRC8(uint8_t data, uint8_t crc);	//Out: CRC
// void DS18B20_SetResolution(uint8_t numBit);	//��������� ���������� �������, �� ��������� ������������ ���������� 12 ���
//===============================================================================


//===============================================================================
























