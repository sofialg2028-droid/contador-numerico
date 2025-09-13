input.onButtonPressed(Button.A, function () {
    movimiento = 0
    basic.showNumber(movimiento)
})
input.onGesture(Gesture.Shake, function () {
    movimiento += 1
    basic.showNumber(movimiento)
})
let movimiento = 0
movimiento = 0
basic.showNumber(movimiento)
