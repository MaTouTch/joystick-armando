WSJoyStick.onKey(KEY.F, function () {
    WSJoyStick.PlayMusic(220, music.beat(BeatFraction.Quarter))
    radio.sendString("F")
})
WSJoyStick.onKey(KEY.A, function () {
    WSJoyStick.PlayMusic(196, music.beat(BeatFraction.Quarter))
    radio.sendString("A")
})
WSJoyStick.onKey(KEY.E, function () {
    WSJoyStick.PlayMusic(330, music.beat(BeatFraction.Quarter))
    radio.sendString("E")
})
WSJoyStick.onKey(KEY.D, function () {
    WSJoyStick.PlayMusic(294, music.beat(BeatFraction.Quarter))
    radio.sendString("D")
})
WSJoyStick.onKey(KEY.B, function () {
    WSJoyStick.PlayMusic(247, music.beat(BeatFraction.Quarter))
    radio.sendString("B")
})
WSJoyStick.onKey(KEY.C, function () {
    WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Quarter))
    radio.sendString("C")
})
WSJoyStick.JoyStickInit()
radio.setGroup(1)
radio.sendString("Joystick")
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        radio.sendString("U")
        basic.showArrow(ArrowNames.North)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendString("D")
        basic.showArrow(ArrowNames.South)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendString("L")
        basic.showArrow(ArrowNames.West)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendString("R")
        basic.showArrow(ArrowNames.East)
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        radio.sendString("UL")
        basic.showArrow(ArrowNames.NorthWest)
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        radio.sendString("UR")
        basic.showArrow(ArrowNames.NorthEast)
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        radio.sendString("DL")
        basic.showArrow(ArrowNames.SouthWest)
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        radio.sendString("DR")
        basic.showArrow(ArrowNames.SouthEast)
    } else if (WSJoyStick.Listen_Key(KEY.P)) {
        basic.showString("P")
    } else if (WSJoyStick.Listen_Key(KEY.A)) {
        basic.showString("A")
    } else if (WSJoyStick.Listen_Key(KEY.B)) {
        basic.showString("B")
    } else if (WSJoyStick.Listen_Key(KEY.C)) {
        basic.showString("C")
    } else if (WSJoyStick.Listen_Key(KEY.D)) {
        basic.showString("D")
    } else if (WSJoyStick.Listen_Key(KEY.E)) {
        basic.showString("E")
    } else if (WSJoyStick.Listen_Key(KEY.F)) {
        basic.showString("F")
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
