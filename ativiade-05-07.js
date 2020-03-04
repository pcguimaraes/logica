for(i = 0; i < 5; i++){
    var realineSync = require('readline-sync')
    var nomeAluno = realineSync.question('Insira o nome do Aluno: ')
    var notaA = realineSync.questionFloat('Insira a nota da prova A: ')
    var notaB = realineSync.questionFloat('Insira a nota da prova B: ')
    var mediaPonderada = (0.3*notaA + 0.7*notaB)

    console.log(`O aluno ${nomeAluno} tem uma media ponderada de ${mediaPonderada}`)
}