/* Escreva um programa para ler o ano de nascimento de uma pessoa e 
escrever uma mensagem que diga se ela poderá ou não votar este ano 
(não é necessário considerar o mês em que ela nasceu). */

var user = require('readline-sync')

var anoNascimento
var anoAtual = 2020
var idade = (anoAtual - anoNascimento)
anoNascimento = user.question(`Insira seu ano de nascimeto: `)

if(idade < 16){
    console.log(`Você tem ${idade} anos e NÃO PODE votar`)
}else if (idade < 18){
    console.log(`Você tem ${idade} anos e PODE votar.`)
}
else if (idade < 65){
    console.log(`Vcoê tem ${idade} anos e DEVE votar.`)
}else{
    console.log(`Você tem ${idade} anos e PODE votar.`)
}