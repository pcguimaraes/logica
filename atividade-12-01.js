/* Criar um algoritmo que receba 2 carros e verifiue se os carros são iguais.
    Para isso: crie uma classe Carro ue receba as variáveis nome, modelo e cor no construtor e
    inicialize as propriedades com estes valores.
    Após isso informe ao usuário para cadastrar o primeiro carro e pega nome, modelo e cor.
    Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo e cor.
    Ao final o algoritmo deve comparar se os carros são iguais.
    Um carro vai ser igual ao outro se o modelo e o nome possuirem o mesmo valor  */
var rs = require('readline-sync')
class Carro{
    constructor(nome, modelo, cor){
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
    }
}

// PEGANDO DADOS DO PRIMEIRO CARRO
    var nomeC = rs.question('Digite o nome do primeiro carro: ')
    var modeloC = rs.question('Digite o modelo do primeiro carro: ')
    var corC = rs.question('Digite a cor do primeiro carro: ')

    var carro1 = new Carro(nomeC, modeloC, corC)
    console.log('\nPRIMEIRO CARRO CADASTRADO!')
    console.log(`Nome: ${carro1.nome}`)
    console.log(`Modelo: ${carro1.modelo}`)
    console.log(`Cor: ${carro1.cor}`)

// PEGANDO DADOS DO SEGUNDO CARRO
    nomeC = rs.question('Digite o nome do segundo carro: ')
    modeloC = rs.question('Digite o modelo do segundo carro: ')
    corC = rs.question('Digite a cor do segundo carro: ')

    var carro2 = new Carro(nomeC, modeloC, corC)
    console.log('\nSEGUNDO CARRO CADASTRADO!')
    console.log(`Nome: ${carro2.nome}`)
    console.log(`Modelo: ${carro2.modelo}`)
    console.log(`Cor: ${carro2.cor}`)

// VERIFICA SE SAO IGUAIS
    if(carro1.nome === carro2.nome) && (carro1.modelo === carro2.modelo){
        console.log('\nCARROS IGUAIS!')
    }else{
        console.log('\nCARROS DIFERENTES!')
    }


