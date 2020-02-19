/* Faça um programa que calcule a potência (potenciação) de um número.
Para isso ele deve receber dois números de entrda: o primeiro número é a base
da potência, o segundo número será a potência.
Ex: usuário inseriu 2 para a base e 4 para a potência. O programa imprime 16 */

var user = require('readline-sync')
var numBase = user.questionInt('Digite o numero da base: ')
var numPotencia = user.questionInt('Digite o numero da potencia: ')
var total = numBase
var conta = 1

if(numPotencia == 0){
    console.log('1')
}else{
    while(conta < numPotencia){
        conta = (conta + 1)
        total = (total * numBase)
    }
console.log(total)
}