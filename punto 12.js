let valorcompra = prompt( "ingrese el valor de tu compra: ")


let total1cuota= valorcompra

let total2cuotas= (parseFloat(valorcompra) *1.05)
let valor2cuotas = (parseFloat(total2cuotas) / 2)

let total6cuotas = (parseFloat(valorcompra)*1.40)
let valor6cuotas = (parseFloat(valor6cuotas)/6)

console.log("una cuota de :" +total1cuota)
console.log("dos cuotas de :" +valor2cuotas+ "total:" +total2cuotas)
cosole.log("seis cuotas de :" +valor6cuotas+ "total"+total6cuotas)