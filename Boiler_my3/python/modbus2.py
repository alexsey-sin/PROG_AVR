import serial  # pip install pyserial
import time

comport = 'com21'
comTimeout = 5 

def run_listen(addr):
    serialPort = serial.Serial(
        port=comport, baudrate=9600, bytesize=8, timeout=comTimeout, stopbits=serial.STOPBITS_ONE
    )
    serialPort.flushOutput()
    serialPort.flushInput()

    serialString = ''  # Used to hold data coming over UART
    while 1:
        send_mess = bytes([addr, 0x03, 0x00, 0x00, 0x00, 0x01])
        send_mess += crc16(send_mess)
        # print(send_mess.hex(' '))
        serialPort.write(send_mess)
        res = bytes()
        # Ждем, пока в последовательном буфере не появятся ожидающие данные
        while serialPort.in_waiting > 0:
            b = serialPort.read()
            res += b
        if len(res) > 0:  #  and res[0:3] == bytes([0x01, 0x03, 0x02]):
            if res[-2:] != crc16(res[0:-2]):
                print('Ошибка CRC16')
                break
            b_temp = (res[3] << 8) + res[4]
            f_temp = float(b_temp / 10)
            print(res.hex(' '), 'Temp: %.1f' % round(f_temp, 1))
            # print(res[0:-2].hex(' '), crc16(res[0:-2]).hex(' '))
            # print(res[-2:].hex(' '))
        time.sleep(1)

def change_address(old_addr, new_addr):
    if old_addr < 1 or old_addr > 247:
        print(f'Адрес "{old_addr}" вне диапазона 1-247')
        return
    if new_addr < 1 or new_addr > 247:
        print(f'Новый адрес "{new_addr}" вне диапазона 1-247')
        return
    send_mess = bytes([old_addr, 0x06, 0x00, 0x01, 0x00, new_addr])
    print(send_mess.hex(' '))
    send_mess += crc16(send_mess)
    print(send_mess.hex(' '))
    serialPort = serial.Serial(
        port=comport, baudrate=9600, bytesize=8, timeout=comTimeout, stopbits=serial.STOPBITS_ONE
    )
    serialPort.flushOutput()
    serialPort.flushInput()

    res = serialPort.write(send_mess)
    print(res)
    ans = bytes()
    # Ждем, пока в последовательном буфере не появятся ожидающие данные
    while serialPort.in_waiting > 0:
        b = serialPort.read()
        ans += b
    print(ans.hex(' '))
    
def crc16(data: bytes):
    crc = 0xffff
    for cur_byte in data:
        crc = crc ^ cur_byte
        for _ in range(8):
            a = crc
            carry_flag = a & 0x0001
            crc = crc >> 1
            if carry_flag == 1:
                crc = crc ^ 0xa001
    return bytes([crc % 256, crc >> 8 % 256])


if __name__ == "__main__":
    # run_listen(1)
    change_address(1, 4)
    
    
    
    
    
    


# DEFAULT_UNIT_ID ::= 1
# DEFAULT_BAUD_RATE ::= 9600

# TEMPERATURE_ADDRESS_ ::= 0x00
# UNIT_ID_ADDRESS_ ::= 0x02
# BAUD_RATE_ADDRESS_ ::= 0x03
# CORRECTION_ADDRESS_ ::= 0x04

# BAUD_RATE_1200_ ::= 0
# BAUD_RATE_2400_ ::= 1
# BAUD_RATE_4800_ ::= 2
# BAUD_RATE_9600_ ::= 3
# BAUD_RATE_19200_ ::= 4
