/* Faça um programa ue leia o valor de um produto X
    e leia a quantidade e reais e um cofrinho que contenha
    moedas de 1real, 50 centavos, 25, 10, 5 e 1.
    O programa deverá verificar se o total de reais que contém no cofrinho é o bastante
    para coprar o produto X e imprimir se possui ou não o valor suficiente. */

var rs = require('readline-sync')

console.log('VAMOS CONTAR AS MOEDAS DO COFRINHO: ')
var real1     = rs.questionInt('Quantas moedas de 1 real? ')
var centavo50 = rs.questionInt('Quantas moedas de 50 centavos? ')
var centavo25 = rs.questionInt('Quantas moedas de 25 centavos? ')
var centavo10 = rs.questionInt('Quantas moedas de 10 centavos? ')
var centavo5  = rs.questionInt('Quantas moedas de 5 centavos? ')
var centavo1  = rs.questionInt('Quantas moedas de 1 centavo? ')
var totalCofrinho = (real1) + (centavo50 * 0.5) + (centavo25 * .25) + (centavo10 * .10) + (centavo5 * .05) + (centavo1 * .01)

console.log("\nOBRIGADO!")
var produtoNome  = rs.question('O que voce deseja comprar com o dinheiro do cofrinho? ')
var produtoValor = rs.questionFloat(`Legal! quanto custa um(a) ${produtoNome}? R$`)

if (totalCofrinho < produtoValor){
    console.log('\nAinda não :(')
    console.log(`Com R$${totalCofrinho} voce nao consegue comprar um(a) ${produtoNome}.`)
    console.log(`Mas não desanime! faltam apenas R$${produtoValor - totalCofrinho}.`)
}else if(totalCofrinho == produtoValor){
    console.log(`\nUAU! muito bem, voce juntou o valor exato para comprar um(a) ${produtoNome}.`)
    console.log('Boas compras!')
}else{
    console.log(`\nUAU! muito bem, voce juntou o mais do que precisa para comprar um(a) ${produtoNome}.`)
    console.log(`Depois de comprar um(a) ${produtoNome} voce ainda tera R$${totalCofrinho - produtoValor}.`)
}