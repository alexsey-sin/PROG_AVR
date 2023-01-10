#include "main.h"
//===============================================================================
int main(void){  
    init();
	LCD_init();
	
	LCD_send(LCD_CMD, 0b10000000);  //��������� ��������� ������ ������ ������ ������
	LCD_send(LCD_DATA, 'Q');  //��� ������� Q
	LCD_send(LCD_DATA, 'a');  //��� ������� a
	
	LCD_send(LCD_CMD, 0b11000000);  //��������� ��������� ������ ������ ������ ������
	LCD_send(LCD_DATA, 0b11010100);  //��� ������� Q
	LCD_send(LCD_DATA, 0b11001000);  //��� ������� a
	
	
	// _delay_ms(500);
	
    while(1){
		if(BitIsSet(FLAGS1,FL1_0_OVER)){	//�������� ���������� ���� ���������
			AnalizBUFFER();
			RX_cnt = 0;
			ClrBit(FLAGS1,FL1_0_OVER);
		}
		if(BitIsSet(FLAGS1,FL1_TX)){	//��������� �������� �����
			if(TX_cnt == TX_size){	//�������� ������� ���������
				StartTX_RS232(0);	//��������� ADM485 � ����� ������
			}else{	//�������� ��������� ����
				while(BitIsClr(UCSRA,UDRE)){};
				UDR = TX_BUFFER[TX_cnt];
				TX_cnt++;
			}
			ClrBit(FLAGS1,FL1_TX);
		}

		// if(BitIsSet(FLAGS1,FL1_BLINK)){
			// if(BitIsSet(PIND,PinWH_KLight)){
				// // CNT_BITS = 0;
				// // BUFFER = 0;
				// ClrBit(PORTD,PinWH_KLight);
			// }else{
				// SetBit(PORTD,PinWH_KLight);
			// }
		// }
		// _delay_ms(500);
		
		
		// if(BitIsClr(PIND,PinBTN_MENU)){	//
			// SetBit(FLAGS1,FL1_BLINK);
			// LCD_init();
		// }
		// if(BitIsClr(PIND,PinBTN_PLS)){	//
			// ClrBit(FLAGS1,FL1_BLINK);
			// SetBit(PORTD,PinWH_KLight);
		// }
		// if(BitIsClr(PIND,PinBTN_MNS)){	//
			// ClrBit(FLAGS1,FL1_BLINK);
			// ClrBit(PORTD,PinWH_KLight);
		// }
    }
    return 0;
}
//===============================================================================
void init(void){
	SetBit(ACSR, ACD);//�������� ���������� ����������	
	// �����
	//DDRx: 0 - ����: 1 - �����		PORTx: 
	// Port A
	DDRA = 0;
	PORTA = 0;
	
	// Port B
	DDRB = 0b11111111;
	PORTB = 0;
	
	// Port D
	DDRD |= (1 << PinWH_RW)|(1 << PinWH_RS)|(1 << PinWH_KLight)|(1 << PinWH_E);
	// DDRD &= ~((1 << PinBTN_MNS));
	// PORTD |= (1 << PinBTN_MNS);
	_delay_ms(50);
	
	
	
	//0(8���)������ - �������� ���������� ��������� ���� ~2��
	TCCR0A = 0;
	TCCR0B = 0;	//���� �����
	TIMSK |= (1 << TOIE0);   // ��������� ���������� �� ������������ 2(8����) ��������
	// ��������� ����� �����: TCCR0B = (1 << CS01);   // (1�)1���*256*8 = ~2�� (������������ ��������)

	// //1(16���)������ - ������������ ���������� ������� ~1.024mc = 100�� ��� 8 ��������
	// TCNT1H = 0;			// ����� ������� ���������
	// TCNT1L = 0;
	// TCCR1A = 0;
	// TCCR1B = (1 << CS10 | 1 << CS11);	//(1�)1���*64*16 = ~1.024mc
	// OCR1AH = 0;
	// OCR1AL = 0x0010;
	// TIMSK |= (1 << OCIE1A);   // ��������� ���������� �� ���������� � 1(16����) ��������

	// ��������� UART �� 9600 bps(���)
	//������� ���������� UBRR: UBRR = (Fosc/(16*BAUND))-1
	UBRRH = 0;
	// UBRRL = 25;	//UBRR = 16000000/(16 * 38400) - 1 = 25,04 //��� U2X = 0
	UBRRL = 103;	//UBRR = 16000000/(16 * 9600) - 1 = 103,16 //��� U2X = 0
	UCSRB = (1 << RXEN)|(1 << RXCIE)|(1 << TXCIE);	// ��� ��������(RXEN=1),��� ����������(TXEN=1),��� ���������� �� ������(RXCIE=1),��� ���������� �� ��������(TXCIE=1)
	// ��� ������� � �������� UCSRC ����������� ��������� ��� URSEL!!!
	UCSRC = (3 << UCSZ0);	// ����������� �����(UMSEL=0), 8 ���(UCSZ2-0=011), 1 ����-���(USBS=0),��� �������� ��������(UPM1-0=00)
	
	// //���������� �� ��������� ������ INT0
	// MCUCR |= (1 << ISC01)|(1 << ISC00);
	// GIMSK |= (1 << INT0);
	
	// sei();
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
	// LCD_send(LCD_CMD, 0b00001100);  //���.�������, ����.������ (C=0), ������ �� ������(B=0)
	LCD_send(LCD_CMD, 0b00001111);  //
	
	
}
void LCD_send(uint8_t rs, uint8_t data){
	if(rs == LCD_CMD) ClrBit(PORTD,PinWH_RS);
	else SetBit(PORTD,PinWH_RS);
	
	SetBit(PORTD,PinWH_E);
	PORTB = data;
	ClrBit(PORTD,PinWH_E);
	_delay_ms(1);
}
// ISR(INT0_vect){	//�������� ����� CLK
	// TCNT0 = 0;
	// TCCR0B |= (1 << CS01);   //������ (����������) ��������
	
	// BUFFER <<= 1;
	// if(BitIsSet(PIND,PinIN_D)) BUFFER += 1;
	// CNT_BITS++;
	// if(CNT_BITS >= 24) SetBit(FLAGS1, FL1_REC_BITS);
// }
ISR(USART_RX_vect){	// ����� ����� ��������
	TCNT0 = 0;
	if(RX_cnt == RX_BUFFER_SIZE){	//�������
		RX_cnt = 0;
		TCCR0B = 0;   //���� ��������
		return;
	}
	RX_BUFFER[RX_cnt] = UDR;
	RX_cnt++;
	TCCR0B = (1 << CS00)|(1 << CS01);   //������ (����������) �������� ~2mc
	// TCCR0B = (1 << CS02);   //������ (����������) �������� ~8mc
}
ISR(USART_TX_vect){	// �������� ����� ���������
	SetBit(FLAGS1, FL1_TX);
}
ISR(TIMER0_OVF_vect){	//~8��/~2mc
	TCCR0B = 0;   //���� ��������
	SetBit(FLAGS1, FL1_0_OVER);
}
// ISR(TIMER1_COMPA_vect){	//~1.024mc
	// TCNT1H = 0;			// ����� ������� ���������
	// TCNT1L = 0;
	// SetBit(FLAGS1, FL1_BLC1);
	// BLINK250++;
	// if(BLINK250 == 250){
		// BLINK250 = 0;
		// InvBit(FLAGS1, FL1_BLC250);
	// }
// }
void AnalizBUFFER(void){
	uint16_t crc;
	
	crc = CalkCRC16(RX_BUFFER, RX_cnt);
	if(crc != 0) return;
	if(RX_BUFFER[0] != MY_ADDR) return;
	if(RX_BUFFER[1] != 0x17) return;	// 23 ������� ������/������ � ������ ���������
	if(RX_cnt != 29) return;	//������� �� ��������� �� ����� ������
	
	if(RX_BUFFER[2] != 0x15) return;	//��.���� �������� ������ (����� ������ �������� ��� ������ 0x15AA (�������))
	if(RX_BUFFER[3] != 0xAA) return;	//��.���� �������� ������
	
	if(RX_BUFFER[4] != 0x00) return;	//����� ��������� ������ ��.������ (� ��� ����� ������ 00 03)
	if(RX_BUFFER[5] != 0x03) return;	//����� ��������� ������ ��.������
		
	if(RX_BUFFER[6] != 0x17) return;	//��.���� �������� ������ (����� ������ �������� ��� ������ 0x1755 (�������))
	if(RX_BUFFER[7] != 0x55) return;	//��.���� �������� ������
		
	if(RX_BUFFER[8] != 0x00) return;	//����� ��������� ������ ��.������ (� ��� ����� ������ 00 08)
	if(RX_BUFFER[9] != 0x08) return;	//����� ��������� ������ ��.������
		
	if(RX_BUFFER[10] != 0x10) return;	//����� ���� ������ (� ��� ����� ������ 0x10)
	
	// if(RX_BUFFER[11] & 0x02) RAZR_REGIM[0] = 1; else RAZR_REGIM[0] = 0;
	// if(RX_BUFFER[11] & 0x01) SEGM_RAZR[0] = RX_BUFFER[12]; else SEGM_RAZR[0] = DigToSeg(RX_BUFFER[12]);
	
	// if(RX_BUFFER[13] & 0x02) RAZR_REGIM[1] = 1; else RAZR_REGIM[1] = 0;
	// if(RX_BUFFER[13] & 0x01) SEGM_RAZR[1] = RX_BUFFER[14]; else SEGM_RAZR[1] = DigToSeg(RX_BUFFER[14]);
	
	// if(RX_BUFFER[15] & 0x02) RAZR_REGIM[2] = 1; else RAZR_REGIM[2] = 0;
	// if(RX_BUFFER[15] & 0x01) SEGM_RAZR[2] = RX_BUFFER[16]; else SEGM_RAZR[2] = DigToSeg(RX_BUFFER[16]);
	
	// if(RX_BUFFER[17] & 0x02) RAZR_REGIM[3] = 1; else RAZR_REGIM[3] = 0;
	// if(RX_BUFFER[17] & 0x01) SEGM_RAZR[3] = RX_BUFFER[18]; else SEGM_RAZR[3] = DigToSeg(RX_BUFFER[18]);
	
	// if(RX_BUFFER[19] & 0x02) RAZR_REGIM[4] = 1; else RAZR_REGIM[4] = 0;
	// if(RX_BUFFER[19] & 0x01) SEGM_RAZR[4] = RX_BUFFER[20]; else SEGM_RAZR[4] = DigToSeg(RX_BUFFER[20]);
	
	// if(RX_BUFFER[21] & 0x02) RAZR_REGIM[5] = 1; else RAZR_REGIM[5] = 0;
	// if(RX_BUFFER[21] & 0x01) SEGM_RAZR[5] = RX_BUFFER[22]; else SEGM_RAZR[5] = DigToSeg(RX_BUFFER[22]);
	
	// if(RX_BUFFER[23] & 0x02) RAZR_REGIM[6] = 1; else RAZR_REGIM[6] = 0;
	// if(RX_BUFFER[23] & 0x01) SEGM_RAZR[6] = RX_BUFFER[24]; else SEGM_RAZR[6] = DigToSeg(RX_BUFFER[24]);
	
	// if(RX_BUFFER[25] & 0x02) RAZR_REGIM[7] = 1; else RAZR_REGIM[7] = 0;
	// if(RX_BUFFER[25] & 0x01) SEGM_RAZR[7] = RX_BUFFER[26]; else SEGM_RAZR[7] = DigToSeg(RX_BUFFER[26]);
		
	// ��������� �����
	TX_BUFFER[0] = MY_ADDR;
	TX_BUFFER[1] = 0x17;
	TX_BUFFER[2] = 0x06;
	// // �������� ��������� ������
	// if(BitIsClr(PINKnMNU,PinKnMNU)){TX_BUFFER[3] = 0xFF; TX_BUFFER[4] = 0xFF;}else{TX_BUFFER[3] = 0x00; TX_BUFFER[4] = 0x00;}
	// if(BitIsClr(PINKnPLS,PinKnPLS)){TX_BUFFER[5] = 0xFF; TX_BUFFER[6] = 0xFF;}else{TX_BUFFER[5] = 0x00; TX_BUFFER[6] = 0x00;}
	// if(BitIsClr(PINKnMIN,PinKnMIN)){TX_BUFFER[7] = 0xFF; TX_BUFFER[8] = 0xFF;}else{TX_BUFFER[7] = 0x00; TX_BUFFER[8] = 0x00;}
	crc = CalkCRC16(TX_BUFFER, 9);
	TX_BUFFER[9] = (uint8_t)crc;
	TX_BUFFER[10] = (uint8_t)(crc >> 8);
	
	TX_cnt = 0;
	TX_size = 11;
	
	//�������� ��������
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
		SetBit(PORTD, PinTxRx);	//��������� ADM485 � ����� ��������
		SetBit(FLAGS1, FL1_TX);
	}else{
		UCSRB |= (1 << RXEN);
		UCSRB &= ~(1 << TXEN);
		ClrBit(PORTD, PinTxRx);	//��������� ADM485 � ����� ������
	}
}
//===============================================================================
//===============================================================================
//===============================================================================

// void AnalizBUFFER(void){
	// // SEGM_RAZR[6] = DigToSeg(CNT_BITS / 10);
	// // SEGM_RAZR[5] = DigToSeg(CNT_BITS % 10);
	// // SEGM_RAZR[2] = DigToSeg(BUFFER & 0x000000FF);
	
	
	
	// // return;
	
	
	// uint8_t cb;	//��������� ����
	// uint8_t db;	//���� ������
	// uint8_t ks;	//����������� �����
	// uint8_t rz;	//������ ����������
	// uint8_t frm;	//������ ������
	
	// cb = (BUFFER >> 16) & 0x000000FF;
	// db = (BUFFER >> 8) & 0x000000FF;
	// ks = BUFFER & 0x000000FF;
	// BUFFER = 0;
	// if((uint8_t)(cb + db) != ks) return;
	// rz = cb & 0b00000111;
	// if(cb & 0b00001000) RAZR_REGIM[rz] = 1; else RAZR_REGIM[rz] = 0;
	// frm = (cb >> 4) & 0b00001111;
	// switch(frm){
		// case 0:{
			// SEGM_RAZR[rz] = db;
			// break;
		// }
		// case 1:{
			// SEGM_RAZR[rz] = DigToSeg(db);
			// break;
		// }
	// }
// }
// uint8_t DigToSeg(uint8_t di){
	// switch(di){
		// case 0: return(0b11111100);		// 0
		// case 1: return(0b01100000);		// 1
		// case 2: return(0b11011001);		// 2
		// case 3: return(0b11110001);		// 3
		// case 4: return(0b01100101);		// 4
		// case 5: return(0b10110101);		// 5
		// case 6: return(0b10111101);		// 6
		// case 7: return(0b11100000);		// 7
		// case 8: return(0b11111101);		// 8
		// case 9: return(0b11110101);		// 9
		// case 10: return(0b11101101);	// A
		// case 11: return(0b00111101);	// b
		// case 12: return(0b10011100);	// C
		// case 13: return(0b01111001);	// d
		// case 14: return(0b10011101);	// E
		// case 15: return(0b10001101);	// F
		// case 16: return(0b11001101);	// P
		// default: return(0b11111111);	// 
	// }
// /**      
// ���� - ��������
	// 7  6  5  4  3  2  1  0
	// A  B  C  D  E  F  dt G
// */
// }
// void Display(void){
	// uint8_t i,byte;
	
	// IND_RAZR++;
	// if(IND_RAZR == 8) IND_RAZR = 0;
	
	// byte = SEGM_RAZR[IND_RAZR];
	// PORTB = 0;	//����� ��� �������
	// for(i = 0;i < 8;i++){
		// ClrBit(PortSEGM,PinSEGM_C);	//�������� CLK
		// if(byte & 0b00000001) SetBit(PortSEGM,PinSEGM_D); else ClrBit(PortSEGM,PinSEGM_D);	//������������� ������
		// SetBit(PortSEGM,PinSEGM_C);	//��������� CLK
		// ClrBit(PortSEGM,PinSEGM_C);	//�������� CLK
		// byte >>= 1;
	// }
	// SetBit(PortSEGM,PinSEGM_E);	//��������� CE
	// ClrBit(PortSEGM,PinSEGM_E);	//�������� CE
	
	// switch(IND_RAZR){
		// case 0:{
			// if(RAZR_REGIM[0] == 0 || (RAZR_REGIM[0] == 1 && BitIsClr(FLAGS1, FL1_BLC250))) SetBit(PortRAZR,PinRAZR_8);
			// break;
		// }
		// case 1:{
			// if(RAZR_REGIM[1] == 0 || (RAZR_REGIM[1] == 1 && BitIsClr(FLAGS1, FL1_BLC250))) SetBit(PortRAZR,PinRAZR_7);
			// break;
		// }
		// case 2:{
			// if(RAZR_REGIM[2] == 0 || (RAZR_REGIM[2] == 1 && BitIsClr(FLAGS1, FL1_BLC250))) SetBit(PortRAZR,PinRAZR_6);
			// break;
		// }
		// case 3:{
			// if(RAZR_REGIM[3] == 0 || (RAZR_REGIM[3] == 1 && BitIsClr(FLAGS1, FL1_BLC250))) SetBit(PortRAZR,PinRAZR_5);
			// break;
		// }
		// case 4:{
			// if(RAZR_REGIM[4] == 0 || (RAZR_REGIM[4] == 1 && BitIsClr(FLAGS1, FL1_BLC250))) SetBit(PortRAZR,PinRAZR_4);
			// break;
		// }
		// case 5:{
			// if(RAZR_REGIM[5] == 0 || (RAZR_REGIM[5] == 1 && BitIsClr(FLAGS1, FL1_BLC250))) SetBit(PortRAZR,PinRAZR_3);
			// break;
		// }
		// case 6:{
			// if(RAZR_REGIM[6] == 0 || (RAZR_REGIM[6] == 1 && BitIsClr(FLAGS1, FL1_BLC250))) SetBit(PortRAZR,PinRAZR_2);
			// break;
		// }
		// case 7:{
			// if(RAZR_REGIM[7] == 0 || (RAZR_REGIM[7] == 1 && BitIsClr(FLAGS1, FL1_BLC250))) SetBit(PortRAZR,PinRAZR_1);
			// break;
		// }
	// }
// }
//===============================================================================
	// SetBit(FLAGS1, FL1_BLC2);
// void CheckBVK(void){
	// //������� ���� - 0 => �� ��������������� ����� ���� 1 - ���������� ���������
	
	// if(BitIsClr(PortPinBVK,PinBVK_TJ)) if(BitIsSet(PortPinBVK,PinBVK_T)) BVK_T = 0; else BVK_T = 1;
	// else if(BitIsClr(PortPinBVK,PinBVK_T)) BVK_T = 0; else BVK_T = 1;

	// if(BitIsClr(PortPinBVK,PinBVK_LJ)) if(BitIsSet(PortPinBVK,PinBVK_L)) BVK_L = 0; else BVK_L = 1;
	// else if(BitIsClr(PortPinBVK,PinBVK_L)) BVK_L = 0; else BVK_L = 1;

	// if(BitIsClr(PortPinBVK,PinBVK_RJ)) if(BitIsSet(PortPinBVK,PinBVK_R)) BVK_R = 0; else BVK_R = 1;
	// else if(BitIsClr(PortPinBVK,PinBVK_R)) BVK_R = 0; else BVK_R = 1;
// }
// void ExecuteBVK(void){
	// if((LEFT == 1 && RIGTH == 1) || (BVK_L == 1 && BVK_R == 1)){	//������. ��� ��������� ��� ��� �������� ������ �����������.
		// LEFT = 0;
		// RIGTH = 0;
		// STATUS = 0;
		// ClrBit(PortKL,PinKL_L);
		// ClrBit(PortKL,PinKL_R);
		// return;
	// }
	// if(BVK_L == 0 && BVK_R == 0) return;	//���� �� ����� �� �������� ���������
	// if(STATUS == 0){	//���� �� "� ������"
		// if(LEFT == 0 && RIGTH == 0 && BVK_T == 1){
			// if(BVK_L == 1){
				// RIGTH = 1;
				// STATUS = 1;
				// SetBit(PortKL,PinKL_R);
			// }
			// if(BVK_R == 1){
				// LEFT = 1;
				// STATUS = 1;
				// SetBit(PortKL,PinKL_L);
			// }
		// }
	// }else if(STATUS == 1){	//���� "� ������"
		// if(RIGTH == 1 && BVK_R == 1){
			// _delay_ms(500);
			// STATUS = 2;	//"��������� ���"
			// RIGTH = 0;
			// ClrBit(PortKL,PinKL_R);
			// _delay_ms(500);
		// }
		// if(LEFT == 1 && BVK_L == 1){
			// _delay_ms(500);
			// STATUS = 2;	//"��������� ���"
			// LEFT = 0;
			// ClrBit(PortKL,PinKL_L);
			// _delay_ms(500);
		// }
	// }else{	//���� "��������� ���" ���� ����� ���������� ��� ������������
		// if(BVK_T == 0){
			// STATUS = 0;	//���� ����������, �������� �������
			// _delay_ms(500);
		// }
	// }
// }	

		// _delay_ms(250);
		// ClrBit(PortKL,PinKL_L);
		// SetBit(PortKL,PinKL_R);
		// _delay_ms(250);
		// ClrBit(PortKL,PinKL_R);
		// SetBit(PortKL,PinKL_L);
		
	// if(BVK_L == 1) SetBit(PortKL,PinKL_L); else ClrBit(PortKL,PinKL_L);
	// if(BVK_R == 1) SetBit(PortKL,PinKL_R); else ClrBit(PortKL,PinKL_R);
	// if(BVK_T == 1) {
		// SetBit(PortKL,PinKL_L);
		// SetBit(PortKL,PinKL_R);
	// }else{
		// ClrBit(PortKL,PinKL_L);
		// ClrBit(PortKL,PinKL_R);
	// }
		



