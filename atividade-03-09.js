/* Faça um algoritmo ue receba uma palavra e imprima ela ao contrário. */
var user = require('readline-sync')
var palavra = user.question('Digite uma palavra: ')
var conta = (palavra.length - 1)
var palavraNova = ""


while(conta >= 0){
    palavraNova = palavraNova + palavra[conta]
    conta--
}
console.log(palavraNova)


