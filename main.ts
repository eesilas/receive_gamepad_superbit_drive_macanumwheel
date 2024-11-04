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
        basic.showArrow(ArrowNames.North)
    } else if (receivedNumber == 4) {
        L()
        basic.showArrow(ArrowNames.NorthEast)
    } else if (receivedNumber == 10) {
        R()
        basic.showArrow(ArrowNames.SouthEast)
    } else if (receivedNumber == 14) {
        S()
    } else if (receivedNumber == 1) {
        SR()
        basic.showArrow(ArrowNames.West)
    } else if (receivedNumber == 2) {
        SL()
        basic.showArrow(ArrowNames.East)
    } else if (receivedNumber == 3) {
        FF()
        basic.showIcon(IconNames.Triangle)
    } else if (receivedNumber == 6) {
        Spin()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.InBackground)
    } else if (receivedNumber == 8) {
        B()
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
function Spin () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    35,
    SuperBit.enMotors.M3,
    -35
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    35,
    SuperBit.enMotors.M4,
    -35
    )
}
function B () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -35,
    SuperBit.enMotors.M3,
    -35
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    -35,
    SuperBit.enMotors.M4,
    -35
    )
}
function LED () {
    SuperBit.RGB_Program().showRainbow(1, 360)
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(100)
    SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(100)
    SuperBit.RGB_Program().show()
    SuperBit.RGB_Program().showRainbow(1, 360)
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
    music.stopAllSounds()
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
    LED()
    basic.showLeds(`
        # # . # #
        . # . # .
        . . . . .
        # # # # #
        . . # . .
        `)
})
