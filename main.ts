let hungreyness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hungreyness = hungreyness + 1
        basic.showNumber(hungreyness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungreyness = 0
        basic.showNumber(hungreyness)
    }
})
