/* Criar um algoritmo que realize a multiplicação e dois números maiores que zero
sem usar o operador de multiplicação (*) */

var user = require('readline-sync')
var num1 = 0
var num2 = 0
var conta = 0
var resultado = 0

while(num1 <= 0){
    num1 = user.questionInt('Digite o primeiro numero (maior que zero): ')
}

while(num2 <= 0){
    num2 = user.questionInt('Digite o segundo numero (maior que zero): ')
}

while (conta < num2){
    resultado = (resultado + num1)
    conta = (conta + 1)
}

console.log(`${num1} X ${num1} = ${resultado}`)



