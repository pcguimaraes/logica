/* Uma empresa abriu uma linha de crédito para os funcinários.
    O valor da apresentação não pode ultrapassar 30% do salário.
    Faça um programa que receba (salário, valor emprestimo, numero de prestações).
    Informe se o empréstimo pode ser concedido.
    Nenhum dos valores informados pode ser zero ou negativo. */

var rs = require('readline-sync')
var salario = rs.questionFloat('Digite o valor do seu salario: R$')
var emprestimo = rs.questionFloat('Digite o valor ue deseja de emprestimo: R$')
var parcelas = rs.questionInt('Digite o numero de parcelas: ')
var porcentagem = 0.30

if (salario && emprestimo && parcelas > 0){
    if ((emprestimo / parcelas) > (salario * porcentagem)){
        console.log('REPROVADO!\nEsse emprestimo nao vai rolar, sorry.')
    }else{
        console.log('APROVADO!\nDemorou, linha de credito aprvada. ;)')
    }
}else{
    console.log('Se voce nao digitar um numero valido eu nao consigo te ajudar.')
}