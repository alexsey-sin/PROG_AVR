@echo off
rem set PATH=%~d0\MinGW\bin;%PATH%
set SRC_NAME_FILE=usb
rem set OBJ_FILES=%CD%\obj
set OUT_FILE=usb

rem ???? ? ????????? ???????????? EEPROM ?? ?????????? ????????? ??????
rem @call avrasm2.exe -fI -W+ie -o asu.hex -e asu.eep asu.asm

call ..\_AVR_ASSEMBLER\avrasm2.exe -fI -W+ie %SRC_NAME_FILE%.avr -o %OUT_FILE%.hex


pause
exit


rem avrasm2.exe -h help listing
rem "C:\Program Files\Atmel\AVR Tools\AvrAssembler2\avrasm2.exe" -S "C:\ASU\labels.tmp" -fI -W+ie -o "C:\ASU\ASU.hex" -d "C:\ASU\ASU.obj" -e "C:\ASU\ASU.eep" -m "C:\ASU\ASU.map" "C:\ASU\ASU.asm"
