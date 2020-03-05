/* Fazer um algoritmo que receba 15 numeros de entrada e
    calcule a media dos numeros fornecidos. */
var rs = require('readline-sync')
var maximo = 15
var total = 0
var media = 0
var i = 0

while(i < maximo){
    i++
    total += rs.questionInt(`Digite o ${i}o numero: `)
}

media = (total / maximo)
console.log(`Media entre os ${maximo} numeros digitados: ${media}`)