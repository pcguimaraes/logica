var realineSync = require('readline-sync')

////////////////// SEM FUNÇÃO //////////////////
var pergunta1 = realineSync.question('essa á a pergunta 1?')
console.log(pergunta1)
var pergunta2 = realineSync.question('essa á a pergunta 2?')
console.log(pergunta2)

////////////////// COM FUNÇÃO //////////////////
function obtemResposta(pergunta){
    var resposta = realineSync.question(pergunta)
    console.log('resposta', resposta)
    return "abc"
    console.log('ab')
}
