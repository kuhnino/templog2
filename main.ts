let Temp = 0
serial.redirectToUSB()
let Timer = 15
Timer = Timer * 60
Timer = Timer - 1
Timer = Timer * 1000
Timer = Timer * 1000
Timer = 10000
basic.forever(function () {
    Temp = DS18B20.TemperatureNumber(DS18B20.pin.pin16)
    Temp = Temp * 10
    Temp = Math.round(Temp)
    Temp = Temp / 10
    Temp = DS18B20.TemperatureNumber(DS18B20.pin.pin16)
    basic.showString("" + (Temp))
    serial.writeString("" + (Temp))
    control.waitMicros(Timer)
    Temp = 0
})
