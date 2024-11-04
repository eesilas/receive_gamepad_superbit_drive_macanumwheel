def L():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 15, SuperBit.enMotors.M3, 35)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 15, SuperBit.enMotors.M4, 35)

def on_received_number(receivedNumber):
    if receivedNumber == 12:
        F()
    elif receivedNumber == 4:
        L()
    elif receivedNumber == 10:
        R()
    elif receivedNumber == 14:
        pass
    else:
        basic.show_icon(IconNames.SILLY)
radio.on_received_number(on_received_number)

def F():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 35, SuperBit.enMotors.M3, 35)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 35, SuperBit.enMotors.M4, 35)
def R():
    SuperBit.motor_run_dual(SuperBit.enMotors.M1, 35, SuperBit.enMotors.M3, 15)
    SuperBit.motor_run_dual(SuperBit.enMotors.M2, 35, SuperBit.enMotors.M4, 15)
radio.set_transmit_power(7)
radio.set_group(77)

def on_forever():
    pass
basic.forever(on_forever)
