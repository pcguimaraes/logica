/* Fazer um algoritmo ue receba 8 idades do usuario
    e no final ele imprime qual a menor idade */
var rs = require('readline-sync')
var menorIdade
var idade = 0
var maximo = 8
var i = 1

idade = rs.questionInt(`Digite a 1a idade: `)
menorIdade = idade

while(i < maximo){
    i++
    idade = rs.questionInt(`Digite a ${i}a idade: `)

    if(idade < menorIdade){menorIdade = idade}
}
console.log(`A menor idade eh ${menorIdade}`)