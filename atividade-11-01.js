/* Utilize o módullo notas-universitarias-util para fazer um rograma ue calcule a média universitária.
    Peça entradas para o usuario de notas e no final calcule a média usando o módulo acima.
    Caso ele seja aprovado imprimir aprovado, se não, reprovado.
*/
var rs = require('readline-sync')
var medias = require('notas-universitarias-util')
var aprovado = 'aprovado'
const notas = {
    g1: rs.questionFloat('Digite a primeira nota: '),
    g2: rs.questionFloat('Digite a segunda nota: '),
    g3: rs.questionFloat('Digite a terceira nota: ')
}
if((medias.default(4).aprovado(notas))){
    aprovado = 'reprovado'
}
console.log(`Nota: ${(medias.default(4).media(notas))} (${aprovado})`)


