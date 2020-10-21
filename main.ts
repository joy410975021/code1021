basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x + 1, 2 + y)
            basic.pause(100)
        }
    }
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x + 2, 3 + y)
            basic.pause(100)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x + 4, y)
            basic.showNumber(0)
        }
    }
})
