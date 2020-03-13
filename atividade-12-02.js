/* Crie um algoritmo que cadastre três alunos e diga qual possui a maior idade,
    Se mais de um possuir maior idade apresentar o nome de todos os que possuem maior idade.
    Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade e
    Inicialize essas variáveis nas propriedades do objeto.
    Após isso peça para o usuário cadastrar o primeiro aluno e solicite o nome e idade.
    Crie o objeto do aluno e adicione em um array.
    Repita esse passo para os outros alunos.
    Ao final do algoritmo deve iterar pelo array de alunos e descobrir uais são os alunos com maior idade e
    Imprimir os seus nomes. */
var rs = require('readline-sync')
var alunos = []
var qtdeAlunos = 3
var maiorIdade = 18
var maior = false
class Aluno{
    constructor(nome, idade){
        this.nome =  nome
        this.idade = idade
        this.maior = maior
    }
}

for(i=0;i<=qtdeAlunos-1;i++){
    // PEGA OS DADOS DOS ALUNOS
    var nome = rs.question(`Digite o nome do ${i+1}o aluno: `)
    var idade = rs.question(`Digite a idade do ${i+1}o aluno: `)

    // VERIFICA QUAL É MAIOR DE IDADE
    if(idade >= maiorIdade){maior = true}else{maior = false}
    alunos[i] = new Aluno(nome, idade, maior)
    
}

console.log('\nALUNOS COM MAIORIDADE:')
for(i=0;i<=qtdeAlunos-1;i++){
    if(alunos[i].idade > maiorIdade){
        console.log(alunos[i].nome) 
    }
}
    