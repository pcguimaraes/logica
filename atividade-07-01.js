/* Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final
    exiba o preço de cada produto junto com o valor total. após inserir todos os produtos o
    programa deve pedir o valor a ser pago, caso o valor passe da compra exibir o troco,
    se o valor for menor informar ue a compra vai ser cancelada.*/

var readlineSync = require('readline-sync')
var precoUnit = []
var precoTotal = 0
var totalPago = 0

for(i = 1; i < 4; i++){
    precoUnit[i] = readlineSync.questionInt('Digite o valor, [0 para finalizar]: ')
    precoTotal += precoUnit[i]
}

console.log('----------------------------------')

for(i = 0; i < 4; i++){
    console.log(`PROUTO ${i+1}: R$${precoUnit[i]}`)
}
console.log(`TOTAL A SER PAGO: R$${precoTotal}`)

totalPago = readlineSync.questionInt(`INSIRA O DINHEIRO:R$`)
var troco = (totalPago - precoTotal)

if(totalPago > precoTotal){
    console.log(`TROCO: R$${troco}`)
}else if(totalPago == precoTotal){
    console.log(`COMPRA PAGA!`)
}else{
    console.log(`SALDO INSUFICIENTE, \n COMPRA CANCELADA!`)
}




