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
        radio.sendString("N")
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendString("S")
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendString("L")
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendString("R")
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        radio.sendString("NL")
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        radio.sendString("NR")
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        radio.sendString("SL")
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        radio.sendString("SR")
    } else {
    	
    }
})
