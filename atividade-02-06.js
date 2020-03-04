/* Elabore um algoritmo que calcule o que deve ser pago por um produto,
    solicitando o preço da etiqueta do produto e a escolha da condição de pagamento.
    Utilize os códigos da tabela para ler qual a condição de pagamento escolhido e efetuar o calculo adequado. 
*/
var rs = require('readline-sync')
var preco = rs.questionFloat('Valor na Etiqueta: ')
var metodoPagamento = rs.questionInt('1 para dinheiro 2 para cartao, 3 para cheque: ')
var metodoDinheiro = "1"
var metodoCartao = "2"
var metooCheque = "3"
var numeroParcelas = rs.questionInt('Numero de parcelas: ')
var cond1 = ` 10% de Desconto.\n Valor a pagar: R$${preco * 0.90}`
var cond2 = ` 15% de Desconto.\n Valor a pagar: R$${(preco * 0.85)}`
var cond3 = ` Sem juros\n Valor a pagar: R$${(preco)} (2 x R$${preco/2})`
var cond4 = ` 10% de Juros\n R${(preco * 1.10)} (2x R$${(preco/2)*1.10})`
var condE = `Numero de parcelas invalido.`

if(metodoPagamento == metodoDinheiro){
    if(numeroParcelas == 1){
        console.log(cond1)
    }else{
        console.log(condE)
    }
}
else if(metodoPagamento == metodoCartao){
    if(numeroParcelas == 1){
        console.log(cond2)
    }else if(numeroParcelas == 2){
        console.log(cond3)
    }else{
        console.log(condE)
    }
}
else if(metodoPagamento == metooCheque){
    if(numeroParcelas == 1){
        console.log(cond1)
    }else if(numeroParcelas == 2){
        console.log(cond4)
    }else{
        console.log(condE)
    }
}
else{console.log('Metodo de pagamento invalido!')}