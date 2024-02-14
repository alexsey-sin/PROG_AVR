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
	// LCD_send(LCD_CMD, 0b00000001);  //команда очистки дисплея
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
			if(val_enc_time == 3 && val_tmp_enc_time == 1){ // Поворот влево
				if(VAL_TIME > DEF_VAL_TIME_MIN) VAL_TIME -= DEF_VAL_TIME_STEP;
				new = 1;
			}
			else if(val_enc_time == 2 && val_tmp_enc_time == 0){ // Поворот вправо
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
			// if(val_enc_shift == 3 && val_tmp_enc_shift == 1){ // Поворот влево
				// if(VAL_SHIFT > DEF_VAL_SHIFT_MIN) VAL_SHIFT -= DEF_VAL_SHIFT_STEP;
				// new = 1;
			// }
			// else if(val_enc_shift == 2 && val_tmp_enc_shift == 0){ // Поворот вправо
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
				// // старт отсчета задержки сдвига (таймер 3)
				// SFIOR |= (1 << PSR321);   // сброс прескалеров таймеров 3, 2, 1
				// TCNT3H = 0;			// сброс счетных регистров
				// TCNT3L = 0;
				
				// uint16_t divider = VAL_SHIFT / 0.023147;
				// OCR3AH = ((divider & 0xFF00) >> 8);
				// OCR3AL = (divider & 0x00FF);
				
				// TCCR3B = (1 << CS32);// ЗАПУСК таймера. Делитель на 256. такт = (90.42ns X 256) = 23.147mks
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
	SetBit(ACSR, ACD);//отключим аналоговый компаратор
	
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
	
	// Формирование 43.1 кГц для отрицательного напряжения контраста
	DDR_WH_Contrast |= (1 << PinWH_Contrast);		// Вывод настраиваем на выход
	OCR2 = 127;
	// CTC режим (сброс счетного регистра при совпадении)
	TCCR2 &= ~(1 << WGM20);
	TCCR2 |= (1 << WGM21);
	// Переключение выхода OC2 при совпадении TCNT2 и OCR2
	TCCR2 &= ~(1 << COM21);
	TCCR2 |= (1 << COM20);
	// Предделитель входного сигнала: Внутренние такты без предделения
	TCCR2 &= ~((1 << CS21)|(1 << CS22));
	TCCR2 |= (1 << CS20);
	
	// LED_GREEN_RED
	DDR_LED_GREEN |= (1 << PinLED_GREEN);
	PORT_LED_GREEN &= ~(1 << PinLED_GREEN);

	DDR_LED_RED |= (1 << PinLED_RED);
	PORT_LED_RED &= ~(1 << PinLED_RED);

	// Энкодеры
	DDR_ENC_TIME_A &= ~(1 << Pin_ENC_TIME_A);
	PORT_ENC_TIME_A |= (1 << Pin_ENC_TIME_A);
	DDR_ENC_TIME_B &= ~(1 << Pin_ENC_TIME_B);
	PORT_ENC_TIME_B |= (1 << Pin_ENC_TIME_B);
	DDR_ENC_SHIFT_A &= ~(1 << Pin_ENC_SHIFT_A);
	PORT_ENC_SHIFT_A |= (1 << Pin_ENC_SHIFT_A);
	DDR_ENC_SHIFT_B &= ~(1 << Pin_ENC_SHIFT_B);
	PORT_ENC_SHIFT_B |= (1 << Pin_ENC_SHIFT_B);
	
	// Датчик
	DDR_SENSOR &= ~(1 << Pin_SENSOR);
	PORT_SENSOR |= (1 << Pin_SENSOR);
	EICRA |= (1<<ISC01);
	EIMSK |= (1<<INT0);

	// Лампа стробоскопа
	DDR_STROBE |= (1 << Pin_STROBE);
	PORT_STROBE &= ~(1 << Pin_STROBE);
	
    //3(16бит)таймер - сдвиг		1 и 3 (16 бит) таймеры см. стр. 111
	// такт 1 / 11.0592 MHz = 9.042 x 10 -8 = 90.42 ns
    ETIFR |= (1 << OCF3A);
    ETIMSK |= (1 << OCIE3A);   // разрешить прерывание по совпадению А 3(16разр) счетчика
	TCCR3A = 0;
	TCCR3B = 0;
	
    //1(16бит)таймер - работа лампы стробоскопа		1 и 3 (16 бит) таймеры см. стр. 111
    TIFR |= (1 << OCF1A);
    TIMSK |= (1 << OCIE1A);   // разрешить прерывание по совпадению А 1(16разр) счетчика
	TCCR1A = 0;
	TCCR1B = 0;

	// // // // 0(8бит)таймер - пауза на сохранение настроек в EEPROM
	//0(8бит)таймер - Работа ШИМ
	// 90.4 x 256 = 23,14mкc = 43,21 кГц => много, добавим прескалер на 8 = 5,4кГц
	DDR_SHIM |= (1 << Pin_SHIM);
	TCNT0 = 0;
    TCCR0 |= (1 << WGM01 | 1 << WGM00);        // Fast PWM
    TCCR0 |= (1 << COM01);	// Clear OC0 on Compare Match, set OC0 at BOTTOM,(non-inverting mode).
	TCCR0 &= ~(1 << COM00);
    
	TCCR0 |= (1 << CS01);   // прескалер = 8
	TCCR0 &= ~(1 << CS02 | 1 << CS00);


	// // // Настройка UART на 38400 bps(бод)
	// // UBRRH = 0;
	// // UBRRL = 26;	//UBRR = 16000000/(16 * 38400) - 1 = 26,04 //при U2X = 0
	// // UCSRB = (1 << TXEN);	// вкл приемник(RXEN=1),вкл передатчик(TXEN=1),вкл прерывание по приему(RXCIE=1),вкл прерывание по передаче(TXCIE=1)
	// // // Для доступа к регистру UCSRC ОБЯЗАТЕЛЬНО выставить бит URSEL(кроме ATTiny2313, там его нет)!!!
	// // UCSRC = (1 << URSEL)|(3 << UCSZ0);	// асинхронный режим(UMSEL=0), 8 бит(UCSZ2-0=011), 1 стоп-бит(USBS=0),без контроля четности(UPM1-0=00)

    // //1(16бит)таймер - основной тик ~1сек
    // SFIOR |= (1 << PSR10 | 1 << PSR2);   // сброс прескалера таймеров 1 и 0
    // TIMSK |= (1 << OCIE1A);   // разрешить прерывание по совпадению А 1(16разр) счетчика
    
	// TCNT1H = 0;			// сброс счетных регистров
	// TCNT1L = 0;
	// TCCR1A = 0;
	// TCCR1B = (1 << CS12);// Делитель на 256  1/16000000 = 62,5нс * 256 = 16мкс
	// //0xF424 это 62500 * 0,000016 = 1,0 сек
	// OCR1AH = ((0xF424 & 0xFF00) >> 8);
	// OCR1AL = (0xF424 & 0x00FF);
	
	// //2(8бит)таймер - блокировка клавиатуры (снятие)
	// TIMSK |= (1 << TOIE2);   // разрешить прерывание по переполнению 2(8разр) счетчика
	// // запускать будем потом
	// // TCNT2 = 0;
	// // TCCR2 |= (1 << CS20 | 1 << CS21 | 1 << CS22);   // (8М)0,125мкс*256*1024 = 32мс (переполнение счетчика)
	// // TCCR2 |= (1 << CS20 | 1 << CS21 | 1 << CS22);   // (16М)0,0625мкс*256*1024 = 16.4мс (переполнение счетчика)
	
	sei();
}
void LCD_init(void){
	_delay_ms(20);
	LCD_send(LCD_CMD, 0b00110000);  //8-битный интерфейс (DL=1)
	_delay_ms(10);
	LCD_send(LCD_CMD, 0b00110000);  //8-битный интерфейс (DL=1)

	LCD_send(LCD_CMD, 0b00111000);  //8-бит, 2 строки(N=1), шрифт 5х8(F=0)
	LCD_send(LCD_CMD, 0b00001000);  //выкл.дисплей, выкл.курсор (C=0), курсор не мигает(B=0)
	LCD_send(LCD_CMD, 0b00000001);  //команда очистки дисплея
	LCD_send(LCD_CMD, 0b00000110);  //вывод символов слева-направо(I/D=1), запрет сдвига экрана при выводе символов(SH=0)
	LCD_send(LCD_CMD, 0b00001100);  //вкл.дисплей, выкл.курсор (C=0), курсор не мигает(B=0)
	// LCD_send(LCD_CMD, 0b00001111);  //вкл.дисплей, вкл.курсор (C=1), курсор мигает(B=1)
	
	
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
	
	LCD_send(LCD_CMD, (0b10000000 + code_row[row] + pos));  //установка указателя
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
	// // старт отсчета задержки сдвига (таймер 3)
	// SFIOR |= (1 << PSR321);   // сброс прескалеров таймеров 3, 2, 1
	// TCNT3H = 0;			// сброс счетных регистров
	// TCNT3L = 0;
	
	// uint16_t divider = VAL_SHIFT / 0.023147;
	// OCR3AH = ((divider & 0xFF00) >> 8);
	// OCR3AL = (divider & 0x00FF);
	
	// TCCR3B = (1 << CS32);// ЗАПУСК таймера. Делитель на 256. такт = (90.42ns X 256) = 23.147mks
	// SetBit(PORT_LED_RED,PinLED_RED);
// }
// ISR(TIMER1_COMPA_vect){
	// TCCR1B = 0;// СТОП таймера 1.
	// ClrBit(PORT_LED_GREEN,PinLED_GREEN);
	// ClrBit(PORT_STROBE,Pin_STROBE);
// }
// ISR(TIMER3_COMPA_vect){
	// TCCR3B = 0;// СТОП таймера 3.
	// ClrBit(PORT_LED_RED,PinLED_RED);
	// SetBit(PORT_LED_GREEN,PinLED_GREEN);
	
	// SFIOR |= (1 << PSR321);   // сброс прескалеров таймеров 3, 2, 1
	// TCNT1H = 0;			// сброс счетных регистров
	// TCNT1L = 0;
	
	// uint16_t divider = VAL_TIME / 0.023147;
	// OCR1AH = ((divider & 0xFF00) >> 8);
	// OCR1AL = (divider & 0x00FF);
	
	// TCCR1B = (1 << CS32);// ЗАПУСК таймера. Делитель на 256. такт = (90.42ns X 256) = 23.147mks
	
	// SetBit(PORT_STROBE,Pin_STROBE);
// }
// //===============================================================================
// //===============================================================================
// //===========================================================================
// //===========================================================================
// //===========================================================================
// //===========================================================================


