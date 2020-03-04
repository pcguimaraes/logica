/* As maçãs custam R$0,30 cada se forem compradas menos do que uma dúzia,
e R$0,25 se forem compradas pelo menos doze. Escreva um programa que leia
o número de maçãs compradas, calcule e escreva o total da compra. */
var user = require('readline-sync')
var umaDuzia = 12
var valorVarejo = 0.30
var valorAtacado = 0.25
var valorTotal = 0
var numMacas = user.questionInt('Quantas macas voce deseja comprar? ')

if (numMacas < 12){
    (valorTotal = numMacas * valorVarejo)
}else{
    (valorTotal = numMacas * valorAtacado)
}

console.log(`Você comprou ${numMacas} macas.\n Total da compra: R$${valorTotal}`)
