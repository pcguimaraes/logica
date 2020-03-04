/* Faça uma função que recebe por parâmetro um valor inteiro e positivo
    e retorna o valor lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
    Solicite ao usuário o número e no final imprima se é primo ou não utilizano a função
    na condição if */
var readlineSync = require('readline-sync')
var numero = readlineSync.question('Digite o numero: ')

function numeroPrimo(ehPrimo){
    for (i = 2; i < numero; i++){
        ehPrimo = (numero % i == 0)
        if(ehPrimo == true){
            return true
        }else{
            ehPrimo = "false"
        }
    }
}

console.log(`Resultado: ${numeroPrimo(numero)}`)
