def L():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 15, SuperBit.enMotors.M3, 35)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 15, SuperBit.enMotors.M4, 35)
def FF():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, 255)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 255, SuperBit.enMotors.M4, 255)

def on_received_number(receivedNumber):
    if receivedNumber == 12:
        F()
    elif receivedNumber == 4:
        L()
    elif receivedNumber == 10:
        R()
    elif receivedNumber == 14:
        S()
    elif receivedNumber == 1:
        SR()
    elif receivedNumber == 2:
        SL()
    elif receivedNumber == 3:
        FF()
    elif receivedNumber == 6:
        pass
    else:
        basic.show_icon(IconNames.SILLY)
radio.on_received_number(on_received_number)

def F():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 35, SuperBit.enMotors.M3, 35)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 35, SuperBit.enMotors.M4, 35)
def SL():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 35, SuperBit.enMotors.M2, -35)
    SuperBit.motor_run_dual(SuperBit.enMotors.M3, -35, SuperBit.enMotors.M4, 35)
def Spin():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 35, SuperBit.enMotors.M3, -35)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 35, SuperBit.enMotors.M4, -35)
def R():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 35, SuperBit.enMotors.M3, 15)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 35, SuperBit.enMotors.M4, 15)
def S():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M3, 0)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 0, SuperBit.enMotors.M4, 0)
def SR():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, -35, SuperBit.enMotors.M2, 35)
    SuperBit.motor_run_dual(SuperBit.enMotors.M3, 35, SuperBit.enMotors.M4, -35)
radio.set_transmit_power(7)
radio.set_group(77)

def on_forever():
    pass
basic.forever(on_forever)
