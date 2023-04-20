input.onButtonPressed(Button.A, function () {
    MuseOLED.clear()
    MuseOLED.writeStringNewLine(Key)
    MuseOLED.writeStringNewLine(UserID)
})
input.onButtonPressed(Button.B, function () {
    MuseOLED.clear()
    basic.pause(1000)
    value = MuseIoT.HKTIAQ(
    Key,
    "620a0a72b42bf200180ae085",
    "62739eeefad13d5e682f4b65",
    MuseIoT.deviceDescription.Temp,
    MuseIoT.methodDirection.NULL
    )
    MuseOLED.writeStringNewLine("Temp: " + value)
    if (value > "2000") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        value = MuseIoT.HKTIAQ(
        Key,
        "620a0a72b42bf200180ae085",
        "627395eefad13d5e6826c9d6",
        MuseIoT.deviceDescription.NULL,
        MuseIoT.methodDirection.switch_ON
        )
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
let value = ""
let Key = ""
let UserID = ""
MuseIoT.initializeWifi()
basic.pause(5000)
MuseIoT.setWifi("izowifi", "izo1234@")
basic.pause(10000)
UserID = "NAMS" + randint(0, 100)
MuseIoT.ConnectMuseDataMQTTbroker(UserID)
basic.pause(10000)
MuseOLED.clear()
Key = MuseIoT.GetTheSecurityKey("muselabs", "muselabs")
MuseOLED.writeStringNewLine("Ready!")
