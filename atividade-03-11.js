/* Escreva um programa que pergunta um número ao usuário, e mostre sua tabuada (de 1 até 10) */

var user = require('readline-sync')
var numero = user.questionInt('Digite um numero e veja sua tabuada: ')
tabuadaI = 1
tabuadaF = 10

while(tabuadaI <= tabuadaF){
    console.log(`${numero} X ${tabuadaI} = ${numero * tabuadaI}`)
    tabuadaI++
}
