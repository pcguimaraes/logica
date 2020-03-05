/* Faça um algoritmo que receba um número e imprima todos seus divisores.
Ex: o usuário digita 21. O algoritmo imprime 1 3 7 21 */
var user = require('readline-sync')
var numero = user.questionInt('Digite o numero: ')
var conta = 0

while(conta < numero){
    conta++
        if (numero % conta == 0){
            console.log(conta)
        }
}