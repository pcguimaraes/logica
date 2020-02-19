/* Faça um programa que recebe um número e imprima tdos os números pares de 0 até o número inserido.
Ex: usuário inseriu 8, o programa imprime 0 2 4  8 */

var user = require('readline-sync')
var numero = 0
var conta = 0

numero = user.questionInt('Digite um numero: ')

while(conta <= numero){
    if(conta == 0){
        console.log(conta)
    }else if((conta % 2) == 0){
        console.log(conta)
    }
    conta = (conta + 1)
}
