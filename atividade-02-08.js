/* Faça um algoritmo ue receba um texto de entrada e diga se a primeira letra é maiúscula ou não. */
var rs = require('readline-sync')
texto =  rs.question('Digite um texto: ')
letra = texto.charCodeAt(0)

if(letra > 64 && letra < 91){
    console.log(letra)
    console.log('Maiuscula')
}else if(letra > 96 && letra < 123){
    console.log(letra)
    console.log('Minuscula')
}else{
    console.log('Isso nao eh uma letra.')
}