WSJoyStick.onKey(KEY.F, function () {
    WSJoyStick.PlayMusic(220, music.beat(BeatFraction.Quarter))
})
WSJoyStick.onKey(KEY.A, function () {
    WSJoyStick.PlayMusic(196, music.beat(BeatFraction.Quarter))
    radio.sendString("A")
})
WSJoyStick.onKey(KEY.E, function () {
    WSJoyStick.PlayMusic(330, music.beat(BeatFraction.Quarter))
})
WSJoyStick.onKey(KEY.D, function () {
    WSJoyStick.PlayMusic(294, music.beat(BeatFraction.Quarter))
})
WSJoyStick.onKey(KEY.B, function () {
    WSJoyStick.PlayMusic(247, music.beat(BeatFraction.Quarter))
})
WSJoyStick.onKey(KEY.C, function () {
    WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Quarter))
})
radio.setGroup(1)
WSJoyStick.JoyStickInit()
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        basic.showArrow(ArrowNames.North)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        basic.showArrow(ArrowNames.South)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        basic.showArrow(ArrowNames.West)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        basic.showArrow(ArrowNames.East)
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
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
