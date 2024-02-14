@echo off
set PATH=%~d0\WinAVR\bin;%~d0\WinAVR\utils\bin;%PATH%
set SRC_FILES=%CD%\src
set OBJ_FILES=%CD%\build

set MCU=atmega328p
set F_CPU=16000000
set OPT=s
set TARGET=main

if not exist "%OBJ_FILES%\" md %OBJ_FILES%

del /Q %OBJ_FILES%\*.*

set G_FLAGS= -mmcu=%MCU% -I. -gstabs -DBOOTSIZE=512 -O%OPT% -funsigned-char -funsigned-bitfields ^
-fpack-struct -fshort-enums -Wall -Wstrict-prototypes -std=gnu99 -DBOOTLOADERHASNOVECTORS ^
-MD -MP

set C_FLAGS= -I%SRC_FILES% -DF_CPU=%F_CPU%UL -Wa,-adhlns=%SRC_FILES%\%TARGET%.lst ^
-MF %OBJ_FILES%\%TARGET%.o.d

set L_FLAG= -Wa,-adhlns=%SRC_FILES%\%TARGET%.o -MF %OBJ_FILES%\%TARGET%.elf.d %TARGET%.elf ^
-Wl,-Map=%TARGET%.map,--cref -lm -Wl,--section-start=.text=0x3F00 -T./ldscripts_no_vector/avr5.x

echo Compiling C: ../src/%TARGET%.c
avr-gcc -c %G_FLAGS% %C_FLAGS% %SRC_FILES%\%TARGET%.c -o %OBJ_FILES%\%TARGET%.o
if errorlevel 1 goto err


echo Linking.
avr-gcc %G_FLAGS% %L_FLAGS% --output %OBJ_FILES%\main.elf %OBJ_FILES%\main.o
if errorlevel 1 goto err


echo Creating load file for Flash: main.hex
avr-objcopy -O ihex -R .eeprom -R .fuse -R .lock %OBJ_FILES%\main.elf main.hex

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





