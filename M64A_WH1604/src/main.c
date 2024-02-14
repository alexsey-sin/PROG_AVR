#include "main.h"
//===============================================================================
int main(void){
    init();
	// LoadValuesFromEEPROM();
	LCD_init();
	_delay_ms(100);

	
	// LCD_write_string(0, 3, Welcome_1_row);		// row, pos, char* str
	// LCD_write_string(1, 1, Welcome_2_row);		// row, pos, char* str
	// LCD_write_string(3, 1, Welcome_4_row);		// row, pos, char* str
	// _delay_ms(3000);
	// LCD_send(LCD_CMD, 0b00000001);  //������� ������� �������
	// _delay_ms(10);
	LCD_write_string(1, 0, Label_time);		// row, pos, char* str
	OutTimeToLCD();
	// LCD_write_string(2, 0, Label_shift);		// row, pos, char* str
	// OutShiftToLCD();
	
	// ready start value
	val_enc_time = read_gray_code_from_encoder_time();
	// val_tmp_enc_shift = read_gray_code_from_encoder_shift();
	UpdatePWM(VAL_TIME);        // PWM
	
	
    while(1){
		val_tmp_enc_time = read_gray_code_from_encoder_time();
		if(val_enc_time != val_tmp_enc_time){ 
			uint8_t new = 0;
			if(val_enc_time == 3 && val_tmp_enc_time == 1){ // ������� �����
				if(VAL_TIME > DEF_VAL_TIME_MIN) VAL_TIME -= DEF_VAL_TIME_STEP;
				new = 1;
			}
			else if(val_enc_time == 2 && val_tmp_enc_time == 0){ // ������� ������
				if(VAL_TIME < DEF_VAL_TIME_MAX) VAL_TIME += DEF_VAL_TIME_STEP;
				new = 1;
			} 

			val_enc_time = val_tmp_enc_time;
			if(new){
				OutTimeToLCD();
				UpdatePWM(VAL_TIME);        // PWM
			}
		}
		
		// val_tmp_enc_shift = read_gray_code_from_encoder_shift();
		// if(val_enc_shift != val_tmp_enc_shift){ 
			// uint8_t new = 0;
			// if(val_enc_shift == 3 && val_tmp_enc_shift == 1){ // ������� �����
				// if(VAL_SHIFT > DEF_VAL_SHIFT_MIN) VAL_SHIFT -= DEF_VAL_SHIFT_STEP;
				// new = 1;
			// }
			// else if(val_enc_shift == 2 && val_tmp_enc_shift == 0){ // ������� ������
				// if(VAL_SHIFT < DEF_VAL_SHIFT_MAX) VAL_SHIFT += DEF_VAL_SHIFT_STEP;
				// new = 1;
			// } 

			// val_enc_shift = val_tmp_enc_shift;
			// if(new) OutShiftToLCD();
		// }
		
		
		// ClrBit(PORT_LED_RED,PinLED_RED);
		// SetBit(PORT_LED_RED,PinLED_RED);
		
		// if(BitIsSet(PIN_SENSOR,Pin_SENSOR)) val_sensor = 1;
		// else{
			// if(val_sensor){
				// // ����� ������� �������� ������ (������ 3)
				// SFIOR |= (1 << PSR321);   // ����� ����������� �������� 3, 2, 1
				// TCNT3H = 0;			// ����� ������� ���������
				// TCNT3L = 0;
				
				// uint16_t divider = VAL_SHIFT / 0.023147;
				// OCR3AH = ((divider & 0xFF00) >> 8);
				// OCR3AL = (divider & 0x00FF);
				
				// TCCR3B = (1 << CS32);// ������ �������. �������� �� 256. ���� = (90.42ns X 256) = 23.147mks
				// SetBit(PORT_LED_RED,PinLED_RED);
				
				// // SetBit(PORT_STROBE,Pin_STROBE);
				// // _delay_ms(VAL_SHIFT);
				// // ClrBit(PORT_STROBE,Pin_STROBE);
				// // ClrBit(PORT_LED_RED,PinLED_RED);
				
				// // WriteBufBigNumber(divider);
				// // LCD_write_string(3, 5, "      ");		// row, pos, char* str
				// // LCD_write_string(3, 5, buf_tmp10);		// row, pos, char* str
	
				// // WriteBufBigNumber(OCR3AH);
				// // LCD_write_string(0, 0, "      ");		// row, pos, char* str
				// // LCD_write_string(0, 0, buf_tmp10);		// row, pos, char* str
				// // WriteBufBigNumber(OCR3AL);
				// // LCD_write_string(0, 8, "      ");		// row, pos, char* str
				// // LCD_write_string(0, 8, buf_tmp10);		// row, pos, char* str
			// }
			// val_sensor = 0;
		// }
		// ClrBit(PORT_STROBE,Pin_STROBE);
		// SetBit(PORT_STROBE,Pin_STROBE);
		
		
		_delay_ms(2);
    }
    return 0;
}
//===============================================================================
void init(void){
	SetBit(ACSR, ACD);//�������� ���������� ����������
	
	// LCD WH
	DDR_WH_RW |= (1 << PinWH_RW);
	PORT_WH_RW &= ~(1 << PinWH_RW);
	
	DDR_WH_RS |= (1 << PinWH_RS);
	PORT_WH_RS &= ~(1 << PinWH_RS);
	
	DDR_WH_KLight |= (1 << PinWH_KLight);
	PORT_WH_KLight |= (1 << PinWH_KLight);
	
	DDR_WH_E |= (1 << PinWH_E);
	PORT_WH_E &= ~(1 << PinWH_E);
	
	DDR_WH_DATA = 0b11111111;
	PORT_WH_DATA = 0b00000000;
	
	// ������������ 43.1 ��� ��� �������������� ���������� ���������
	DDR_WH_Contrast |= (1 << PinWH_Contrast);		// ����� ����������� �� �����
	OCR2 = 127;
	// CTC ����� (����� �������� �������� ��� ����������)
	TCCR2 &= ~(1 << WGM20);
	TCCR2 |= (1 << WGM21);
	// ������������ ������ OC2 ��� ���������� TCNT2 � OCR2
	TCCR2 &= ~(1 << COM21);
	TCCR2 |= (1 << COM20);
	// ������������ �������� �������: ���������� ����� ��� �����������
	TCCR2 &= ~((1 << CS21)|(1 << CS22));
	TCCR2 |= (1 << CS20);
	
	// LED_GREEN_RED
	DDR_LED_GREEN |= (1 << PinLED_GREEN);
	PORT_LED_GREEN &= ~(1 << PinLED_GREEN);

	DDR_LED_RED |= (1 << PinLED_RED);
	PORT_LED_RED &= ~(1 << PinLED_RED);

	// ��������
	DDR_ENC_TIME_A &= ~(1 << Pin_ENC_TIME_A);
	PORT_ENC_TIME_A |= (1 << Pin_ENC_TIME_A);
	DDR_ENC_TIME_B &= ~(1 << Pin_ENC_TIME_B);
	PORT_ENC_TIME_B |= (1 << Pin_ENC_TIME_B);
	DDR_ENC_SHIFT_A &= ~(1 << Pin_ENC_SHIFT_A);
	PORT_ENC_SHIFT_A |= (1 << Pin_ENC_SHIFT_A);
	DDR_ENC_SHIFT_B &= ~(1 << Pin_ENC_SHIFT_B);
	PORT_ENC_SHIFT_B |= (1 << Pin_ENC_SHIFT_B);
	
	// ������
	DDR_SENSOR &= ~(1 << Pin_SENSOR);
	PORT_SENSOR |= (1 << Pin_SENSOR);
	EICRA |= (1<<ISC01);
	EIMSK |= (1<<INT0);

	// ����� �����������
	DDR_STROBE |= (1 << Pin_STROBE);
	PORT_STROBE &= ~(1 << Pin_STROBE);
	
    //3(16���)������ - �����		1 � 3 (16 ���) ������� ��. ���. 111
	// ���� 1 / 11.0592 MHz = 9.042 x 10 -8 = 90.42 ns
    ETIFR |= (1 << OCF3A);
    ETIMSK |= (1 << OCIE3A);   // ��������� ���������� �� ���������� � 3(16����) ��������
	TCCR3A = 0;
	TCCR3B = 0;
	
    //1(16���)������ - ������ ����� �����������		1 � 3 (16 ���) ������� ��. ���. 111
    TIFR |= (1 << OCF1A);
    TIMSK |= (1 << OCIE1A);   // ��������� ���������� �� ���������� � 1(16����) ��������
	TCCR1A = 0;
	TCCR1B = 0;

	// // // // 0(8���)������ - ����� �� ���������� �������� � EEPROM
	//0(8���)������ - ������ ���
	// 90.4 x 256 = 23,14m�c = 43,21 ��� => �����, ������� ��������� �� 8 = 5,4���
	DDR_SHIM |= (1 << Pin_SHIM);
	TCNT0 = 0;
    TCCR0 |= (1 << WGM01 | 1 << WGM00);        // Fast PWM
    TCCR0 |= (1 << COM01);	// Clear OC0 on Compare Match, set OC0 at BOTTOM,(non-inverting mode).
	TCCR0 &= ~(1 << COM00);
    
	TCCR0 |= (1 << CS01);   // ��������� = 8
	TCCR0 &= ~(1 << CS02 | 1 << CS00);


	// // // ��������� UART �� 38400 bps(���)
	// // UBRRH = 0;
	// // UBRRL = 26;	//UBRR = 16000000/(16 * 38400) - 1 = 26,04 //��� U2X = 0
	// // UCSRB = (1 << TXEN);	// ��� ��������(RXEN=1),��� ����������(TXEN=1),��� ���������� �� ������(RXCIE=1),��� ���������� �� ��������(TXCIE=1)
	// // // ��� ������� � �������� UCSRC ����������� ��������� ��� URSEL(����� ATTiny2313, ��� ��� ���)!!!
	// // UCSRC = (1 << URSEL)|(3 << UCSZ0);	// ����������� �����(UMSEL=0), 8 ���(UCSZ2-0=011), 1 ����-���(USBS=0),��� �������� ��������(UPM1-0=00)

    // //1(16���)������ - �������� ��� ~1���
    // SFIOR |= (1 << PSR10 | 1 << PSR2);   // ����� ���������� �������� 1 � 0
    // TIMSK |= (1 << OCIE1A);   // ��������� ���������� �� ���������� � 1(16����) ��������
    
	// TCNT1H = 0;			// ����� ������� ���������
	// TCNT1L = 0;
	// TCCR1A = 0;
	// TCCR1B = (1 << CS12);// �������� �� 256  1/16000000 = 62,5�� * 256 = 16���
	// //0xF424 ��� 62500 * 0,000016 = 1,0 ���
	// OCR1AH = ((0xF424 & 0xFF00) >> 8);
	// OCR1AL = (0xF424 & 0x00FF);
	
	// //2(8���)������ - ���������� ���������� (������)
	// TIMSK |= (1 << TOIE2);   // ��������� ���������� �� ������������ 2(8����) ��������
	// // ��������� ����� �����
	// // TCNT2 = 0;
	// // TCCR2 |= (1 << CS20 | 1 << CS21 | 1 << CS22);   // (8�)0,125���*256*1024 = 32�� (������������ ��������)
	// // TCCR2 |= (1 << CS20 | 1 << CS21 | 1 << CS22);   // (16�)0,0625���*256*1024 = 16.4�� (������������ ��������)
	
	sei();
}
void LCD_init(void){
	_delay_ms(20);
	LCD_send(LCD_CMD, 0b00110000);  //8-������ ��������� (DL=1)
	_delay_ms(10);
	LCD_send(LCD_CMD, 0b00110000);  //8-������ ��������� (DL=1)

	LCD_send(LCD_CMD, 0b00111000);  //8-���, 2 ������(N=1), ����� 5�8(F=0)
	LCD_send(LCD_CMD, 0b00001000);  //����.�������, ����.������ (C=0), ������ �� ������(B=0)
	LCD_send(LCD_CMD, 0b00000001);  //������� ������� �������
	LCD_send(LCD_CMD, 0b00000110);  //����� �������� �����-�������(I/D=1), ������ ������ ������ ��� ������ ��������(SH=0)
	LCD_send(LCD_CMD, 0b00001100);  //���.�������, ����.������ (C=0), ������ �� ������(B=0)
	// LCD_send(LCD_CMD, 0b00001111);  //���.�������, ���.������ (C=1), ������ ������(B=1)
	
	
}
void LCD_send(uint8_t rs, uint8_t data){
	if(rs == LCD_CMD) ClrBit(PORT_WH_RS,PinWH_RS);
	else SetBit(PORT_WH_RS,PinWH_RS);
	
	SetBit(PORT_WH_E,PinWH_E);
	PORT_WH_DATA = data;
	ClrBit(PORT_WH_E,PinWH_E);
	_delay_ms(1);
}
void LCD_write_string(uint8_t row, uint8_t pos, char* str){
	uint8_t ib = 0;
	uint8_t code_row[4] = {0x00, 0x40, 0x10, 0x50};
	
	LCD_send(LCD_CMD, (0b10000000 + code_row[row] + pos));  //��������� ���������
	// _delay_ms(2);
	while(str[ib] != 0){
		LCD_send(LCD_DATA, charTable[(uint8_t)str[ib]]);
		ib++;
	}
}
uint8_t read_gray_code_from_encoder_time(void){ 
	uint8_t val = 0; 

	if(BitIsSet(PIN_ENC_TIME_A, Pin_ENC_TIME_A)) val |= (1<<1); 
	if(BitIsSet(PIN_ENC_TIME_B, Pin_ENC_TIME_B)) val |= (1<<0); 

	return val; 
} 
// uint8_t read_gray_code_from_encoder_shift(void){ 
	// uint8_t val = 0; 

	// if(BitIsSet(PIN_ENC_SHIFT_A, Pin_ENC_SHIFT_A)) val |= (1<<1); 
	// if(BitIsSet(PIN_ENC_SHIFT_B, Pin_ENC_SHIFT_B)) val |= (1<<0); 

	// return val; 
// } 
void UpdatePWM(uint8_t per_pwm){
	OCR0 = per_pwm * 2.55;
}
// void LoadValuesFromEEPROM(void){
	// VAL_TIME = eeprom_read_word(&EE_VAL_TIME);
	// // SETVAL_DELAY_PAUSE = eeprom_read_byte(&EE_SETVAL_DELAY_PAUSE);
// }
// void UpdateValuesFromEEPROM(void){
	// eeprom_update_word(&EE_VAL_TIME, VAL_TIME);
	// // eeprom_update_byte(&EE_SETVAL_DELAY_PAUSE, SETVAL_DELAY_PAUSE);
// }
void OutTimeToLCD(void){
	WriteBufBigNumber(VAL_TIME);
	LCD_write_string(1, 11, "     ");		// row, pos, char* str
	uint8_t i = strlen(buf_tmp10);
	LCD_write_string(1, (15 - i), buf_tmp10);		// row, pos, char* str
}
// void OutShiftToLCD(void){
	// WriteBufBigNumber(VAL_SHIFT);
	// LCD_write_string(2, 11, "     ");		// row, pos, char* str
	// uint8_t i = strlen(buf_tmp10);
	// LCD_write_string(2, (15 - i), buf_tmp10);		// row, pos, char* str
// }
void WriteBufBigNumber(uint16_t val){
	uint8_t d, fnam = 0;
	uint8_t ib = 0;

	d = val / 10000;
	if(d != 0){buf_tmp10[ib] = (d + 0x30); ib++; fnam = 1;}
	val = val % 10000;
	
	d = val / 1000;
	if(d != 0){buf_tmp10[ib] = (d + 0x30); ib++; fnam = 1;}
	else if(fnam == 1){buf_tmp10[ib] = 0x30; ib++;}
	val = val % 1000;
	
	d = val / 100;
	if(d != 0){buf_tmp10[ib] = (d + 0x30); ib++; fnam = 1;}
	else if(fnam == 1){buf_tmp10[ib] = 0x30; ib++;}
	val = val % 100;
	
	d = val / 10;
	if(d != 0){buf_tmp10[ib] = (d + 0x30); ib++;}
	else if(fnam == 1){buf_tmp10[ib] = 0x30; ib++;}
	d = val % 10;
	
	buf_tmp10[ib] = (d + 0x30); ib++;

	buf_tmp10[ib] = 0;
	return;
}
// ISR(INT0_vect){
	// // ����� ������� �������� ������ (������ 3)
	// SFIOR |= (1 << PSR321);   // ����� ����������� �������� 3, 2, 1
	// TCNT3H = 0;			// ����� ������� ���������
	// TCNT3L = 0;
	
	// uint16_t divider = VAL_SHIFT / 0.023147;
	// OCR3AH = ((divider & 0xFF00) >> 8);
	// OCR3AL = (divider & 0x00FF);
	
	// TCCR3B = (1 << CS32);// ������ �������. �������� �� 256. ���� = (90.42ns X 256) = 23.147mks
	// SetBit(PORT_LED_RED,PinLED_RED);
// }
// ISR(TIMER1_COMPA_vect){
	// TCCR1B = 0;// ���� ������� 1.
	// ClrBit(PORT_LED_GREEN,PinLED_GREEN);
	// ClrBit(PORT_STROBE,Pin_STROBE);
// }
// ISR(TIMER3_COMPA_vect){
	// TCCR3B = 0;// ���� ������� 3.
	// ClrBit(PORT_LED_RED,PinLED_RED);
	// SetBit(PORT_LED_GREEN,PinLED_GREEN);
	
	// SFIOR |= (1 << PSR321);   // ����� ����������� �������� 3, 2, 1
	// TCNT1H = 0;			// ����� ������� ���������
	// TCNT1L = 0;
	
	// uint16_t divider = VAL_TIME / 0.023147;
	// OCR1AH = ((divider & 0xFF00) >> 8);
	// OCR1AL = (divider & 0x00FF);
	
	// TCCR1B = (1 << CS32);// ������ �������. �������� �� 256. ���� = (90.42ns X 256) = 23.147mks
	
	// SetBit(PORT_STROBE,Pin_STROBE);
// }
// //===============================================================================
// //===============================================================================
// //===========================================================================
// //===========================================================================
// //===========================================================================
// //===========================================================================


