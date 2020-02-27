/* Faça um programa para ler dois numeros inteiros A e B e informar se A é divisível por B. */
var readlineSync = require('readline-sync')
var a = readlineSync.questionInt('Digite um numero A: ')
var b = readlineSync.questionInt('Digite um numero B: ')

if(a % b == 0){
    console.log(`${a} e divisivel por ${b}`)
}else{
    console.log(`${a} nao e divisivel por ${b}`)
}