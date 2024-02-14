@echo off
set PATH=%~d0\WinAVR\bin;%~d0\WinAVR\utils\bin;%PATH%
set SRC_FILES=%CD%\src
set OBJ_FILES=%CD%\build

set MCU=atmega328p
set F_CPU=16000000
set OPT=s
set TARGET=main

del /Q %OBJ_FILES%\*.*

set G_FLAGS= -mmcu=%MCU% -I. -gstabs -DBOOTSIZE=512 -O%OPT% -funsigned-char -funsigned-bitfields ^
-fpack-struct -fshort-enums -Wall -Wstrict-prototypes -std=gnu99 -DBOOTLOADERHASNOVECTORS ^
-MD -MP

set C_FLAGS= -I%SRC_FILES% -DF_CPU=%F_CPU%UL -Wa,-adhlns=%SRC_FILES%\%TARGET%.lst ^
-MF %OBJ_FILES%\%TARGET%.o.d

set L_FLAG= -Wa,-adhlns=%SRC_FILES%\%TARGET%.o -MF %OBJ_FILES%\%TARGET%.elf.d %TARGET%.elf ^
-Wl,-Map=%TARGET%.map,--cref -lm -Wl,--section-start=.text=0x3F00 -T./ldscripts_no_vector/avr5.x

REM Compiling: main.c
REM avr-gcc -c -mmcu=atmega16 -I. -gstabs -DBOOTSIZE=512  -Os -funsigned-char -funsigned-bitfields
REM -fpack-struct -fshort-enums -Wall -Wstrict-prototypes -Wa,-adhlns=main.lst  -std=gnu99
REM -DBOOTLOADERHASNOVECTORS -MD -MP -MF .dep/main.o.d main.c -o main.o
	
REM Linking: main.elf
REM avr-gcc -mmcu=atmega16 -I. -gstabs -DBOOTSIZE=512  -Os -funsigned-char -funsigned-bitfields
REM -fpack-struct -fshort-enums -Wall -Wstrict-prototypes -Wa,-adhlns=main.o  -std=gnu99
REM -DBOOTLOADERHASNOVECTORS -MD -MP -MF .dep/main.elf.d main.o  --output main.elf
REM -Wl,-Map=main.map,--cref    -lm -Wl,--section-start=.text=0x3C00 -T./ldscripts_no_vector/avr5.x 

echo Compiling C: ../src/%TARGET%.c
avr-gcc -c %G_FLAGS% %C_FLAGS% %SRC_FILES%\%TARGET%.c -o %OBJ_FILES%\%TARGET%.o
if errorlevel 1 goto err


echo Linking.
avr-gcc %G_FLAGS% %L_FLAGS% --output %OBJ_FILES%\main.elf %OBJ_FILES%\main.o
if errorlevel 1 goto err


echo Creating load file for Flash: main.hex
avr-objcopy -O ihex -R .eeprom -R .fuse -R .lock %OBJ_FILES%\main.elf main.hex

REM Creating load file for Flash: main.hex
REM avr-objcopy -O ihex -R .eeprom main.elf main.hex

REM echo Creating load file for EEPROM: main.eep
REM avr-objcopy -j .eeprom --set-section-flags=.eeprom="alloc,load" --change-section-lma .eeprom=0 --no-change-warnings -O ihex ^
	REM %OBJ_FILES%\main.elf main.eep || exit 0

REM Creating Extended Listing: main.lss
avr-objdump -h -S -z %OBJ_FILES%\main.elf > %OBJ_FILES%\main.lss

REM Creating Symbol Table: main.sym
avr-nm -n %OBJ_FILES%\main.elf > %OBJ_FILES%\main.sym

echo.
avr-size --mcu=%MCU% --format=avr %OBJ_FILES%\main.elf



pause
exit

:err
pause
exit





