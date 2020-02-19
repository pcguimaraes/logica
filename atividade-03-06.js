/* Faça um programa que pergunte ao usuário:
"insira 0 para sair ou ualquer outra tecla para continuar"
Se o usuário inserir 0 o programa encerra.
Se o usuário inserir qualuer outra coisa o programa pergunta novamente:
"Insira 0 para sir ou qualquer outro número para continuar" */

var user = require('readline-sync')
var fraseI = "insira 0 para sair ou qualquer outra tecla para continuar: "
var fraseF = "Programa encerrado. Obrigado!"
var tecla = "1"
var sair = "0"

while(tecla != sair){
    tecla = user.question(fraseI)
}

console.log(fraseF)

