::Writing fuse and lock bits
::��訢��� fuse � lock ���� & enable 16 mhz clock for fast Upload at next stage
:: avrdude -q -C avrdude.conf -p m2560 -c avrispmkII -P com1 -b 19200  -Uefuse:w:0xFD:m -Uhfuse:w:0xD8:m -Ulfuse:w:0xFF:m -Ulock:w:0x0F:m -B 4000



::Writing bootloader
::��訢��� bootloader
::Disabling verify for 2560 - this version of avrdude have bug and print error 
:: avrdude -q -C avrdude.conf -p m2560 -c avrispmkII -P com7 -b 57600 -e -V -U flash:w:stk500boot_v2_mega2560.hex 
:: avrdude -q -C avrdude.conf -p m328p -c avrispmkII -P com7 -b 57600 -e -V -U flash:w:stk500boot_v2_mega2560.hex 
:: avrdude -q -C avrdude.conf -p m328p -c avrispmkII -P com7 -b 115200 -V -U flash:r:temp.hex 
::  avrdude -v -Cavrdude.conf -pm328p -cavr109 -PCOM7 -b115200 -e -Uhfuse:r:temp.hex 
::  avrdude -v -Cavrdude.conf -pm328p -cavr109 -PCOM7 -b115200 -e
avrdude -v -Cavrdude.conf -pm328p -cavr910 -PCOM7 -b115200 -e
pause


:: Delay 2 seconds:
:: TIMEOUT /T 2 /NOBREAK

::mega2560.name=Arduino Mega 2560

::mega2560.upload.protocol=stk500v2
::mega2560.upload.maximum_size=258048
::mega2560.upload.speed=115200

::mega2560.bootloader.low_fuses=0xFF
::mega2560.bootloader.high_fuses=0xD8
::mega2560.bootloader.extended_fuses=0xFD
::mega2560.bootloader.path=stk500v2
::mega2560.bootloader.file=stk500boot_v2_mega2560.hex
::mega2560.bootloader.unlock_bits=0x3F
::mega2560.bootloader.lock_bits=0x0F

::mega2560.build.mcu=atmega2560
::mega2560.build.f_cpu=16000000L
::mega2560.build.core=arduino