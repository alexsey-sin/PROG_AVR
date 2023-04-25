#include "main.h"
//===============================================================================
int main(void){  
	_delay_ms(10);
    init();
	_delay_ms(10);
	LCD_init();
	StartTX_RS232(0);	//переводим ADM485 в режим приема
	
	SetBit(PORTD,PinWH_KLight); 
	_delay_ms(500);
	ClrBit(PORTD,PinWH_KLight);
	
    while(1){
		if(BitIsSet(FLAGS1,FL1_0_OVER)){	//ожидание следующего бита превышено
			AnalizBUFFER();
			RX_cnt = 0;
			ClrBit(FLAGS1,FL1_0_OVER);
		}
		if(BitIsSet(FLAGS1,FL1_TX)){	//Закончена передача байта
			if(TX_cnt == TX_size){	//передача посылки закончена
				StartTX_RS232(0);	//переводим ADM485 в режим приема
			}else{	//посылаем следующий байт
				while(BitIsClr(UCSRA,UDRE)){};
				UDR = TX_BUFFER[TX_cnt];
				TX_cnt++;
			}
			ClrBit(FLAGS1,FL1_TX);
		}
    }
    return 0;
}
//===============================================================================
void init(void){
	SetBit(ACSR, ACD);//отключим аналоговый компаратор	
	// порты
	//DDRx: 0 - вход: 1 - выход		PORTx: 
	// Port A
	DDRA = 0;
	PORTA = 0;
	
	// Port B
	DDRB = 0b11111111;
	PORTB = 0;
	
	// Port D
	DDRD |= (1 << PinWH_RW)|(1 << PinWH_RS)|(1 << PinWH_KLight)|(1 << PinWH_E)|(1 << PinTxRx);
	DDRD &= ~((1 << PinTx)|(1 << PinRx));
	PORTD &= ~((1 << PinWH_RW)|(1 << PinWH_RS)|(1 << PinWH_KLight)|(1 << PinWH_E)|(1 << PinTxRx));
	_delay_ms(50);
	
	
	
	//0(8бит)таймер - ожидание следующего приемного бита ~2мс
	TCCR0A = 0;
	TCCR0B = 0;	//пуск потом
	TIMSK |= (1 << TOIE0);   // разрешить прерывание по переполнению 2(8разр) счетчика
	// запускать будем потом: TCCR0B = (1 << CS01);   // (1М)1мкс*256*8 = ~2мс (переполнение счетчика)

	// Настройка UART на 9600 bps(бод)
	//Формула вычисления UBRR: UBRR = (Fosc/(16*BAUND))-1
	UBRRH = 0;
	// UBRRL = 25;	//UBRR = 16000000/(16 * 38400) - 1 = 25.04 //при U2X = 0
	UBRRL = 51;	//UBRR = 8000000/(16 * 9600) - 1 = 51.08 //при U2X = 0
	// UBRRL = 103;	//UBRR = 16000000/(16 * 9600) - 1 = 103.16 //при U2X = 0
	UCSRB = (1 << RXEN)|(1 << RXCIE)|(1 << TXCIE);	// вкл приемник(RXEN=1),вкл передатчик(TXEN=1),вкл прерывание по приему(RXCIE=1),вкл прерывание по передаче(TXCIE=1)
	// Для доступа к регистру UCSRC ОБЯЗАТЕЛЬНО выставить бит URSEL!!!
	UCSRC = (3 << UCSZ0);	// асинхронный режим(UMSEL=0), 8 бит(UCSZ2-0=011), 1 стоп-бит(USBS=0),без контроля четности(UPM1-0=00)
	
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
	if(rs == LCD_CMD) ClrBit(PORTD,PinWH_RS);
	else SetBit(PORTD,PinWH_RS);
	
	SetBit(PORTD,PinWH_E);
	PORTB = data;
	ClrBit(PORTD,PinWH_E);
	_delay_ms(1);
}
ISR(USART_RX_vect){	// прием байта завершен
	TCNT0 = 0;
	if(RX_cnt == RX_BUFFER_SIZE){	//перебор
		RX_cnt = 0;
		TCCR0B = 0;   //стоп счетчика
		return;
	}
	RX_BUFFER[RX_cnt] = UDR;
	RX_cnt++;
	// TCCR0B = (1 << CS00)|(1 << CS01);   //запуск (перезапуск) счетчика ~2mc
	TCCR0B = (1 << CS02);   //запуск (перезапуск) счетчика ~8mc
}
ISR(USART_TX_vect){	// передача байта завершена
	SetBit(FLAGS1, FL1_TX);
}
ISR(TIMER0_OVF_vect){	//~8мс/~2mc
	TCCR0B = 0;   //стоп счетчика
	SetBit(FLAGS1, FL1_0_OVER);
}
void AnalizBUFFER(void){
	uint16_t crc;
	uint8_t com, len, row, poz;
	uint8_t err = 0;
	
	if(RX_BUFFER[0] != MY_ADDR) return;
	
	while(1){
		crc = CalkCRC16(RX_BUFFER, RX_cnt);
		if(crc != 0){
			err = 1; break;			//ошибка crc16
		}
		com = RX_BUFFER[1];
		switch(com){
			case 0x10: {	// 10 команда записи в группу регистров
				if(RX_BUFFER[2] != 0x00 || RX_BUFFER[3] > 0x01){	//адрес строки
					err = 3; break;			//ошибка адреса строки
				}
				row = RX_BUFFER[3];
				if(RX_BUFFER[4] != 0x00 || RX_BUFFER[5] > 0x1F){	//адрес позиции первого символа
					err = 4; break;			//ошибка позиции первого символа
				}
				poz = RX_BUFFER[5];
				len = RX_BUFFER[6];					//число байт данных
				if((row * 16 + poz + len) > 32){
					err = 5; break;			//ошибка числа символов
				}
				if((len + 9) != RX_cnt){
					err = 6; break;			//ошибка длинны посылки
				}
				LCD_send(LCD_CMD, (0b10000000 + (row<<6)) + poz);  //установка указателя

				for(uint8_t i=0; i<len; i++) LCD_send(LCD_DATA, RX_BUFFER[i+7]);
				break;
			}
			case 0x0A: {	// команда - очистить дисплей
				LCD_send(LCD_CMD, 0b00000001);  //команда очистки дисплея
				break;
			}
			default:{
				err = 2; break;			//ошибочная команда
			}
		}
		break;
	}
		
	// формируем ответ
	TX_BUFFER[0] = MY_ADDR;
	TX_BUFFER[1] = com;
	TX_BUFFER[2] = err;
	crc = CalkCRC16(TX_BUFFER, 3);
	TX_BUFFER[3] = (uint8_t)crc;
	TX_BUFFER[4] = (uint8_t)(crc >> 8);
	
	TX_cnt = 0;
	TX_size = 5;
	
	// uint8_t i;
	// for(i=0; i<RX_cnt; i++) TX_BUFFER[i] = RX_BUFFER[i];
	// TX_cnt = 0;
	// TX_size = RX_cnt;
	
	//стартуем передачу
	StartTX_RS232(1);
		
}
uint16_t CalkCRC16(uint8_t* buffer, uint8_t cnt){
	uint8_t i;
	uint16_t crc = 0xFFFF;
	
	while(cnt--){
		crc ^= *buffer++;
		for(i = 0;i < 8;i++){
			if(crc & 0x0001) crc = (crc >> 1) ^ 0xA001;
			else crc = (crc >> 1);
		}
	}
	return crc;
}
void StartTX_RS232(uint8_t tx){
	if(tx){
		UCSRB |= (1 << TXEN);
		UCSRB &= ~(1 << RXEN);
		SetBit(PORTD, PinTxRx);	//переводим ADM485 в режим передачи
		SetBit(FLAGS1, FL1_TX);
	}else{
		UCSRB |= (1 << RXEN);
		UCSRB &= ~(1 << TXEN);
		ClrBit(PORTD, PinTxRx);	//переводим ADM485 в режим приема
	}
}
//===============================================================================
//===============================================================================
//===============================================================================




