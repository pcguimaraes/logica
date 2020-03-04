/* Tendo como entrada a altura e o sexo codificado da seguinte forma:
    valor 1 para feminino
    valor 2 para masculino
de uma pessoa, construa um programa que calcule e imprima seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7 * altrua) - 58
-para mulheres: (62.1 * altura) - 44.7
*/
var readlineSync = require('readline-sync')
var altura = readlineSync.questionFloat('Digite a sua altura: ')
var sexo = readlineSync.questionInt('Digite 1 para feminino e 2 para masculino: ')
var conta1 = ((72.7 * altura) - 58)
var conta2 = ((62.1 * altura) - 44.7)
var resultado = 0

if(sexo == 1){
    resultado = conta1
}else{
    resultado = conta2
}

console.log(`Peso ideal: ${resultado}`)