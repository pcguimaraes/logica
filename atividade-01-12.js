/* Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa.
    Caso sexo seja "F" e estado civil seja "CASADA", solicitar o tempo de casada (anos) */

var readlineSync = require('readline-sync')
var nome = readlineSync.question('Digite seu nome: ')
var sexo = readlineSync.question('Digite o genero: M para Masculino, F para Feminino: ')
var civil = readlineSync.question('Digite seu estado civil: ')
var f = 'f'
var ff = 'F'
var m = 'm'
var mm = 'M'
var casada = 'casada'
var ccasada = 'CASADA'

if(sexo == f || sexo == ff){
    if(civil == casada || civil == ccasada){
        readlineSync.questionInt(`Digite o tempo de casada (anos): `)
    }
}else if(sexo == m || sexo == mm){
}else{
    console.log('ERRO! Generero nao reconhecido')
}