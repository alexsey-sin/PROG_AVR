@echo off
rem Use avrdude as programming-software with the AVRProg compatible bootloader
rem Martin Thomas, 2006

rem Verfiy that the bootloader is configured with #define DEVTYPE DEVTYPE_ISP
rem since it seems that avrdude does not work with "Boot" device-types and needs
rem ISP device-types (at least in version 5.1 as in WinAVR 4/06)

set HEXFILE=main.hex
REM set OUT_HEXFILE=out.hex
REM set PROGRAMMER=avr109
set PROGRAMMER=arduino
set PORT=com7
REM set BAUD=19200
set BAUD=115200
set MCU=atmega328p

rem * disable safemode - bootloader can not "restore" fuses anyway
set DIS_SAVE=-u

REM avrdude %DIS_SAVE% -p %MCU% -P %PORT% -c %PROGRAMMER% -b %BAUD% -v -U flash:w:%HEXFILE% 
REM avrdude %DIS_SAVE% -p %MCU% -P %PORT% -c %PROGRAMMER% -b %BAUD% -e -v -U flash:r:%OUT_HEXFILE% 
REM avrdude %DIS_SAVE% -p %MCU% -P %PORT% -c %PROGRAMMER% -b %BAUD% -e -v -U flash:w:%HEXFILE% 
avrdude %DIS_SAVE% -p %MCU% -P %PORT% -c %PROGRAMMER% -b %BAUD% -e -U flash:w:%HEXFILE% 

pause