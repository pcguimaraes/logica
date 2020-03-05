/* Fazer um algoritmo que receba 5 numeros e mostra o produto dos ímpares
    e a soma dos pares. */
rs = require('readline-sync')
parImpar = 2
maximo = 5
numero = 0
impar = 1
par = 0
i = 0

while(i < maximo){
    i++
    numero = rs.questionInt(`Digite o ${i}o numero: `)

    if(!(numero % parImpar)){
        par = (par + numero)
    }else{
        impar = (impar * numero)
    }
}

console.log(`\nProduto dos impares: ${impar}`)
console.log(`Soma dos pares: ${par}`)

