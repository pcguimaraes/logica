/* Faça um programa onde o usuário irá escolher se quer
converte graus Celsius para Fahrenheit ou F para C */
rs = require('readline-sync')
var fahrenheit = 'F'
var celsius = 'C'
var metodoGraus = rs.question(`Digite "C" para Celsius ou "F" para Fahrenheit: `).toUpperCase()
var valorGraus  = 0
var valorGraus2 = 0

if(metodoGraus == fahrenheit){
    valorGraus = rs.questionFloat('Digite a quantidade de graus Fahrenheit: ')
    valorGraus2 = ((valorGraus - 32) * 5/9)
    console.log('CONVERSAO:')
    console.log(`${valorGraus}º${fahrenheit} = ${valorGraus2}º${celsius}`)
}else if(metodoGraus == celsius){
    valorGraus = rs.questionFloat('Digite a quantidade de graus Celsius: ')
    valorGraus2 = ((valorGraus * 9/5) + 32)
    console.log('CONVERSAO:')
    console.log(`${valorGraus}º${celsius} = ${valorGraus2}º${fahrenheit}`)
}else{
    console.log('Comando Invalido!')
}

