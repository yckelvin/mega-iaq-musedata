def on_button_pressed_a():
    MuseOLED.clear()
    MuseOLED.write_string_new_line("The key is:")
    MuseOLED.write_string_new_line(Key)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    MuseOLED.clear()
    basic.pause(1000)
    MuseOLED.write_string_new_line("Getting Temp value:")
    basic.pause(1000)
    MuseOLED.write_string_new_line(MuseIoT.HKTIAQ(Key,
            "620a0a72b42bf200180ae085",
            "62739eeefad13d5e682f4b65",
            MuseIoT.deviceDescription.TEMP,
            MuseIoT.methodDirection.NULL))
    basic.pause(1000)
    MuseOLED.write_string_new_line("Getting Dust value:")
    basic.pause(1000)
    MuseOLED.write_string_new_line(MuseIoT.HKTIAQ(Key,
            "620a0a72b42bf200180ae085",
            "62739eeefad13d5e682f4b65",
            MuseIoT.deviceDescription.DUST,
            MuseIoT.methodDirection.NULL))
    basic.pause(1000)
input.on_button_pressed(Button.B, on_button_pressed_b)

Key = ""
basic.show_number(0)
MuseIoT.initialize_wifi()
basic.pause(5000)
basic.show_number(1)
MuseIoT.set_wifi("KLHOME", "127214529")
basic.pause(10000)
basic.show_number(2)
MuseIoT.connect_muse_data_mqt_tbroker("KL234")
basic.pause(10000)
basic.show_number(3)
MuseOLED.clear()
Key = "KiGdFTgz"
MuseOLED.write_string_new_line("Ready!")
basic.pause(10000)
MuseOLED.clear()
basic.show_icon(IconNames.YES)