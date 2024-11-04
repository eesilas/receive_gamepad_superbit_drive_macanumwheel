function L () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    15,
    SuperBit.enMotors.M3,
    35
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    15,
    SuperBit.enMotors.M4,
    35
    )
}
function FF () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M3,
    255
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    255,
    SuperBit.enMotors.M4,
    255
    )
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        F()
    } else if (receivedNumber == 4) {
        L()
    } else if (receivedNumber == 10) {
        R()
    } else if (receivedNumber == 14) {
        S()
    } else if (receivedNumber == 1) {
        SL()
    } else if (receivedNumber == 2) {
        SR()
    } else if (receivedNumber == 3) {
        FF()
    } else {
        basic.showIcon(IconNames.Silly)
    }
})
function F () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    35,
    SuperBit.enMotors.M3,
    35
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    35,
    SuperBit.enMotors.M4,
    35
    )
}
function SL () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    35,
    SuperBit.enMotors.M2,
    -35
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    -35,
    SuperBit.enMotors.M4,
    35
    )
}
function R () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    35,
    SuperBit.enMotors.M3,
    15
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    35,
    SuperBit.enMotors.M4,
    15
    )
}
function S () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    0,
    SuperBit.enMotors.M3,
    0
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    0,
    SuperBit.enMotors.M4,
    0
    )
}
function SR () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -35,
    SuperBit.enMotors.M2,
    35
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    35,
    SuperBit.enMotors.M4,
    -35
    )
}
radio.setTransmitPower(7)
radio.setGroup(77)
basic.forever(function () {
	
})
