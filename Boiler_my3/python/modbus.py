#
# TESTS MODBUS TEMPERATURE SENSOR WITH pymodbus LIB
# IN SYNC / ASYNC MODES
#

# MAIN CONFIGURATION VARIABLES (RUNMODE AND SENSOR TYPE)
# runMode      = "ASYNC"        # "ASYNC" for async reading, "SYNC" for sync reading
runMode      = "SYNC"        # "ASYNC" for async reading, "SYNC" for sync reading
clientCreate = "inside_loop"  # "inside_loop" / "outside_loop"
# sensor       = "BOX"          # "TUBE" for tube shaped sensor, "BOX" for box shaped sensor
sensor       = "TUBE"          # "TUBE" for tube shaped sensor, "BOX" for box shaped sensor
# connPort     = '/dev/ttyS2'   # '/dev/ttyS3', '/tmp/ptyp0' => for simulated
connPort     = 'com21'   # '/dev/ttyS3', '/tmp/ptyp0' => for simulated

# --------------------------------------------------------------------------- #
# slave parameters
# --------------------------------------------------------------------------- #
connMethod  = 'rtu'          # 'binary' 'ascii'

if sensor == "BOX":
    connSpeed   = 9600       # BOX SHAPED
else:
    # connSpeed   = 4800       # TUBE SHAPED
    connSpeed   = 9600       # BOX SHAPED

commTimeout = 5              # Affects to all operations not just connection init!
UNIT        = 0x01            # Slave Id aka Slave Address ala Unit Id in modbus world

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

# --------------------------------------------------------------------------- #
# import the various client implementations
# --------------------------------------------------------------------------- #
import asyncio
# from pymodbus.client.asynchronous import schedulers
# from pymodbus.client.asynchronous.serial import AsyncModbusSerialClient
from pymodbus.client import AsyncModbusSerialClient
# from pymodbus.client.sync import ModbusSerialClient as SyncModbusSerialClient
from pymodbus.client import ModbusSerialClient as SyncModbusSerialClient


# --------------------------------------------------------------------------- #
# configure the client logging
# --------------------------------------------------------------------------- #
import logging
FORMAT = ('%(asctime)-15s %(threadName)-15s ' '%(levelname)-8s %(module)-15s:%(lineno)-8s %(message)s')
logging.basicConfig(format=FORMAT)
log = logging.getLogger()
log.setLevel(logging.DEBUG)
# log.setLevel(logging.INFO)

import time

# --------------------------------------------------------------------------- #
# sync function
# --------------------------------------------------------------------------- #
def run_sync_client():
    # log.debug(f'MODBUS SYNC CLIENT: Trying to open {connPort} @ {connSpeed} in {connMethod} mode for {sensor} sensor')
    client = SyncModbusSerialClient(method=connMethod, port=connPort, timeout=commTimeout, baudrate=connSpeed)
    client.connect()
    # log.debug(f'CONNECTION SUCCESSFUL!')

    try:
        readsLeft = 10

        while readsLeft > 0:
            # resp = client.read_holding_registers(address = 0, count = 5, slave = UNIT)
            # SEND: 0x1 0x3 0x0 0x0 0x0 0x5 0x85 0xc9 ()
            # RECV: 0x1 0x3 0xa 0x1 0x16 0x0 0x0 0x0 0x1 0x0 0x3 0x0 0x0 0x5e 0xd3
            
            resp = client.read_holding_registers(address = 0, count = 1, slave = UNIT)
            # SEND: 0x1 0x3 0x0 0x0 0x0 0x1 0x84 0xa
            # RECV: 0x1 0x3 0x2 0x1 0x14 0xb9 0xdb
            
            assert(not resp.isError())          # test that we are not an error
            print(resp.registers, f'Температура {resp.registers[0]/10}ºC')
            # log.debug(f"Temperature {resp.registers[0]/10}ºC")

            time.sleep(2)
            readsLeft -= 1

        client.close()

    except Exception as e:
        # log.exception(e)
        client.close()


# --------------------------------------------------------------------------- #
# async function
# --------------------------------------------------------------------------- #
async def run_async_client(client):

    try:
        readsLeft = 10

        while readsLeft > 0:
            if sensor == "BOX":
                resp = await client.read_input_registers(1, 2, slave=UNIT)
                assert(not resp.isError())          # test that we are not an error
                log.debug(f"Temperature {resp.registers[0]/10}ºC - Humidity {resp.registers[1]/10}%")

            else: # TUBE SHAPED
                # resp = await client.read_holding_registers(0, 2, slave=UNIT)
                resp = await client.read_holding_registers(0, 1, slave=UNIT)
                assert(not resp.isError())          # test that we are not an error
                log.debug(f"Temperature {resp.registers[0]/10}ºC")

            await asyncio.sleep(2)
            readsLeft = readsLeft - 1

        client.close()

    except Exception as e:
        log.exception(e)
        # client.transport.close()
        # client.close()


async def worker_task(name, load):
    while True:
        log.debug(f"Worker {name}")
        await asyncio.sleep(load)


# Forces async_io_factory() to not call asyncio.run_coroutine_threadsafe(coro, loop=loop)
class fake_async_loop:
    def is_running(self):
        return False

    def run_until_complete(self, obj):
        return


async def task_launcher(client):

    if client is None:        # Client was not instantiated outside the asyncio loop
        try:
            # log.debug(f'ASYNC MODBUS CLIENT INSTANTIATED INISDE ASYNCIO RUNNING TASK LOOP: Connect to {connPort} @ {connSpeed} in {connMethod} mode for {sensor} sensor')
            # This hangs because of the asyncio.run_coroutine_threadsafe (when CTRL+C always stuck at future.result()!):
            runningLoop = asyncio.get_running_loop()
            # loop, client = AsyncModbusSerialClient(schedulers.ASYNC_IO, port=connPort, baudrate=connSpeed, method=connMethod, timeout=commTimeout, loop=runningLoop)
            loop, client = AsyncModbusSerialClient(port=connPort, baudrate=connSpeed, method=connMethod, timeout=commTimeout, loop=runningLoop)
            # never reaches this point...

            # Following quoted snippet overrides: future = asyncio.run_coroutine_threadsafe(coro, loop=loop) and future.result()
            # inside async_io_AND WORKS:
            #fakeLoop = fake_async_loop()
            #loop, client =  AsyncModbusSerialClient(schedulers.ASYNC_IO, port=connPort, baudrate=connSpeed, method=connMethod, timeout=commTimeout, loop=fakeLoop)
            ## Fix current loop. AsyncModbusSerialClient actuallyu
            #client.loop = asyncio.get_running_loop()
            #await client.connect()

        except  Exception as e:
            log.debug(f"Excepcio {e}")

    tasks = []
    # tasks.append(worker_task("Worker_01",1))
    # tasks.append(worker_task("Worker_02",2))
    tasks.append(run_async_client(client))

    await asyncio.gather(*tasks)


# --------------------------------------------------------------------------- #
# main function
# --------------------------------------------------------------------------- #
if __name__ == "__main__":

    if runMode == "SYNC":
        run_sync_client()

    else:
        if clientCreate == "outside_loop":
        # - CREATE A CONNECTION (client) OUTSIDE ASYNCIO LOOP. It Works, we can the pass the client an asyncio loop with tasks
        # - BUT in many cases we need to create the client inside a running loop
        #
            # log.debug(f'ASYNC MODBUS CLIENT INSTANTIATED OUTSIDE ASYNC TASK LOOP: Connect to {connPort} @ {connSpeed} in {connMethod} mode for {sensor} sensor')
            # loop, client = AsyncModbusSerialClient(schedulers.ASYNC_IO, port=connPort, baudrate=connSpeed, method=connMethod, timeout=commTimeout)
            loop, client = AsyncModbusSerialClient(port=connPort, baudrate=connSpeed, method=connMethod, timeout=commTimeout)
            # log.debug(f'CONNECTION SUCCESSFUL!')

            loop.run_until_complete(task_launcher(client))
            loop.close()

        else:   # clientCreate == "inside_loop"
            asyncio.run(task_launcher(None))