
let cantidad = prompt("ingrese el numero de dias a viajar ")

let hotel=30000
let comida =15000
let varios =20000

console.log("el monto del hotes es de:" + number(cantidad*hotel))
console.log ("el monto de comida es de " + number(cantidad*comida))
console.log("el monto de gastos varios es de "+ number(cantidad*varios))

console.log ("el monto total del cheque es de "+number((cantidad*hotel) +(cantidad*comida)+(cantidad*varios)))
