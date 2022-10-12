let Eingabe = 0
if (input.buttonIsPressed(Button.AB)) {
    Eingabe = 2
}
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.Butterfly)
basic.showIcon(IconNames.Meh)
if (Eingabe == 2) {
    led.plot(1, 2)
}
basic.forever(function () {
	
})
