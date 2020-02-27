/* Escreva um programa que leia o valor de 3 ângulos de um triânguloe escreva se o triângulo é:
a) Triângulo Retângulo: possui um ângulo reto (90º)
b) Triângulo Obtusângulo: possui um ângulo obtuso (maior que 90º)
c) Triângulo Acutângulo: possui três ângulos agudos (menor que 90º) */
var readlineSync = require('readline-sync')
var angulo1 = readlineSync.question('Digite o valor do primeiro angulo do triangulo: ')
var angulo2 = readlineSync.question('Digite o valor do segundo angulo do triangulo: ')
var angulo3 = readlineSync.question('Digite o valor do terceiro angulo do triangulo: ')
var erro = "valores errados. Isso não é um triangulo."

if(angulo1 && angulo2 && angulo3 < 90){
    console.log('Triângulo Acutângulo')
}else if(angulo1 || angulo2 || angulo3 == 90){
    console.log('Triângulo Retângulo')
}else if(angulo1 || angulo2 || angulo3 > 90){
    console.log('Triângulo Obtusângulo')
}else{
    console.log(erro)
}