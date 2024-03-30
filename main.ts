WSJoyStick.onKey(KEY.F, function () {
    WSJoyStick.PlayMusic(220, music.beat(BeatFraction.Quarter))
    radio.sendString("F")
    _var += -1
    kitronik_VIEW128x64.show("Score : " + convertToText(_var), 1, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
})
WSJoyStick.onKey(KEY.E, function () {
    WSJoyStick.PlayMusic(330, music.beat(BeatFraction.Quarter))
    radio.sendString("E")
    _var += 5
    kitronik_VIEW128x64.show("Score : " + convertToText(_var), 1, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
})
WSJoyStick.onKey(KEY.D, function () {
    WSJoyStick.PlayMusic(294, music.beat(BeatFraction.Quarter))
    radio.sendString("D")
    _var += 1
    kitronik_VIEW128x64.show("Score : " + convertToText(_var), 1, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
})
WSJoyStick.onKey(KEY.C, function () {
    WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Quarter))
    radio.sendString("C")
    _var += -5
    kitronik_VIEW128x64.show("Score : " + convertToText(_var), 1, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
})
let _var = 0
WSJoyStick.JoyStickInit()
radio.setGroup(1)
radio.sendString("Joystick")
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Big)
_var = 20
kitronik_VIEW128x64.plot(10)
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
    } else if (WSJoyStick.Listen_Key(KEY.A)) {
        radio.sendString("A")
    } else if (WSJoyStick.Listen_Key(KEY.B)) {
        radio.sendString("B")
    } else {
        kitronik_VIEW128x64.show("Compass : " + convertToText(input.compassHeading()), 2, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        kitronik_VIEW128x64.show("Light : " + convertToText(input.lightLevel()), 3, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        kitronik_VIEW128x64.plot(input.compassHeading())
    }
})
