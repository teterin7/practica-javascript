let precio= prompt("ingrese el precio producto")


let descuento= precio* 0.20
descuento= precio-descuento

iva=0.15
let total= descuento * iva
total= total+ descuento
alert("precio a pagar es : " + total)