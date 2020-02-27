/* Escreva um programa para ler 3 valores inteiros (considere ue não serão lidos valores iguais)
e escrevê-los em orem crescente.*/
readlineSync = require('readline-sync')
var numero1 = readlineSync.question('Digite o primeiro numero: ')
var numero2 = readlineSync.question('Digite o segundo numero: ')
var numero3 = readlineSync.question('Digite o terceiro numero: ')
var primeiroNumero
var segundoNumero
var terceiroNumero

// verifica o menor
if(numero1 < numero2 && numero1 < numero3){
    primeiroNumero = numero1
}else if(numero2 < numero1 && numero2 < numero3){
    primeiroNumero = numero2
}else{
    primeiroNumero = numero3
}

// verifica o maior
if(numero1 > numero2 && numero1 > numero3){
    terceiroNumero = numero1
}else if(numero2 > numero1 && numero2 > numero3){
    terceiroNumero = numero2
}else{
    terceiroNumero = numero3
}

// verifica o numero do meio
if(numero1 != primeiroNumero && numero1 != terceiroNumero){
    segundoNumero = numero1
}else if(numero2 != primeiroNumero && numero2 != terceiroNumero){
    segundoNumero = numero2
}else{
    segundoNumero = numero3
}

console.log(`${primeiroNumero} < ${segundoNumero} < ${terceiroNumero}`)