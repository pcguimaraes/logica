/* Faça um programa que pergunte ao usuário escolher entre as opões A e B.
A encerra o programa, B é para fazer a soma.
    a. Se o usuário inserir A o programa fecha.
    b. Se o usuário inserir B o programa vai ralizar uma opção de soma,
    solicitando números inteiros (n1 e n2) onde após o usuário inserir o
    segundo número o algoritmo deve apresentar a soma e também pergunta se
    quer realizar outro cálculo.
    c. Se o usuário inserir qualquer coisa diferente de A e B o programa deve dizer
    que não entendeu o comando e solicitar novamete para inserir A ou B. */

var user = require('readline-sync')
var codAMaiusculo = "A"
var codBMaisuculo = "B"
var codAMinusculo = "a"
var codBMinusculo = "b"
var codSMaisuculo = "S"
var codSMinusculo = "s"
var codD = user.question('Digite A ou B: ')
var fechaPrograma = 'Programa Fechado.'
var digiteNovamente = 'Nao entendi o seu comando. Por favor, digite novamente: '
var n1
var n2
var resultadoSoma
var perguntaN1 = 'Digite o primeiro numero: '
var PerguntaN2 = 'Digite o segundo numero: '
var outroCalculo = 's'
var perguntaCalculo = 'Deseja fazer outro calculo? Digite S para sim: '

while(codD != codAMaiusculo && codD != codAMinusculo && codD != codBMaisuculo && codD != codBMinusculo){
    codD = user.question(digiteNovamente)
}

if(codD == codAMaiusculo || codD == codAMinusculo){
    console.log(fechaPrograma)
}else{
    while(outroCalculo == codSMaisuculo || outroCalculo == codSMinusculo){
        n1 = user.questionInt(perguntaN1)
        n2 = user.questionInt(PerguntaN2)
        resultadoSoma = (n1 + n2)
        console.log(`O resultado da soma entre ${n1} e ${n2} é ${resultadoSoma}`)
        outroCalculo = user.question(perguntaCalculo)
    }
}
