input.onButtonPressed(Button.A, function () {
    MuseOLED.clear()
    MuseOLED.writeStringNewLine("The key is:")
    MuseOLED.writeStringNewLine(Key)
})
input.onButtonPressed(Button.B, function () {
    MuseOLED.clear()
    basic.pause(1000)
    MuseOLED.writeStringNewLine("Getting Temp value:")
    basic.pause(1000)
    MuseOLED.writeStringNewLine(MuseIoT.HKTIAQ(
    Key,
    "620a0a72b42bf200180ae085",
    "62739eeefad13d5e682f4b65",
    MuseIoT.deviceDescription.Temp,
    MuseIoT.methodDirection.NULL
    ))
    basic.pause(1000)
    MuseOLED.writeStringNewLine("Getting Dust value:")
    basic.pause(1000)
    MuseOLED.writeStringNewLine(MuseIoT.HKTIAQ(
    Key,
    "620a0a72b42bf200180ae085",
    "62739eeefad13d5e682f4b65",
    MuseIoT.deviceDescription.Dust,
    MuseIoT.methodDirection.NULL
    ))
    basic.pause(1000)
})
let Key = ""
basic.showNumber(0)
MuseIoT.initializeWifi()
basic.pause(5000)
basic.showNumber(1)
MuseIoT.setWifi("KLHOME", "127214529")
basic.pause(10000)
basic.showNumber(2)
MuseIoT.ConnectMuseDataMQTTbroker("KL234")
basic.pause(10000)
basic.showNumber(3)
MuseOLED.clear()
Key = "KiGdFTgz"
MuseOLED.writeStringNewLine("Ready!")
basic.pause(10000)
MuseOLED.clear()
basic.showIcon(IconNames.Yes)
