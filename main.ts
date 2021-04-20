function erzeuge_apfel () {
    ist_besetzt = true
    while (ist_besetzt == true) {
        apfel_x = randint(0, 4)
        apfel_y = randint(0, 4)
        ist_besetzt = false
        for (let Index = 0; Index <= schlange.length / 2; Index++) {
            schlange_x = schlange[Index * 2]
            schlange_y = schlange[Index * 2 + 1]
            if (apfel_x == schlange_x && apfel_y == schlange_y) {
                ist_besetzt = true
            }
        }
    }
    led.plot(apfel_x, apfel_y)
}
input.onButtonPressed(Button.A, function () {
    kopf_x = schlange[0]
    kopf_y = schlange[1]
    kopf_y = (kopf_y + 1) % 5
    schlange.unshift(kopf_y)
    schlange.unshift(kopf_x)
    led.plot(kopf_x, kopf_y)
    if (apfel_x == kopf_x && apfel_y == kopf_y) {
        soundExpression.happy.play()
        erzeuge_apfel()
    } else {
        ende_y = schlange.pop()
        ende_x = schlange.pop()
        led.unplot(ende_x, ende_y)
    }
})
input.onButtonPressed(Button.B, function () {
    kopf_x = schlange[0]
    kopf_y = schlange[1]
    kopf_x = (kopf_x + 1) % 5
    schlange.unshift(kopf_y)
    schlange.unshift(kopf_x)
    led.plot(kopf_x, kopf_y)
    if (apfel_x == kopf_x && apfel_y == kopf_y) {
        soundExpression.happy.play()
        erzeuge_apfel()
    } else {
        ende_y = schlange.pop()
        ende_x = schlange.pop()
        led.unplot(ende_x, ende_y)
    }
})
let ende_x = 0
let ende_y = 0
let schlange_y = 0
let schlange_x = 0
let ist_besetzt = false
let apfel_y = 0
let apfel_x = 0
let schlange: number[] = []
let kopf_y = 0
let kopf_x = 0
kopf_x = 2
kopf_y = 2
schlange = [kopf_x, kopf_y]
led.plot(kopf_x, kopf_y)
apfel_x = 4
apfel_y = 4
led.plot(apfel_x, apfel_y)
