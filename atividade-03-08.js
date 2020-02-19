/* Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em uma linha.*/
var user = require('readline-sync')
var palavra = user.question('Digite uma palavra: ')
var totalLetras = palavra.length
var conta = 0


while(conta < totalLetras){
    console.log(palavra.substring(conta, (conta + 1)))
    conta++
}