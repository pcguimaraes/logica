/* Adicione no  programa anterior após a impressão dos dados
    que ele salve o objeto Carro em formato JSON.
    Utilize o JSON.string para transformar o objeto em string e após isso
    utlize os métoos da biblioteca 'fs' para salvar o arquivo.
    Salve o json como 'carro.json' */

    var rs = require('readline-sync')
    var fs = require('fs')
    
    var carro = new Object()
    carro.cor = rs.question('Digite a cor do carro: ')
    carro.modelo = rs.question('Digite o modelo do carro: ')
    carro.marca = rs.question('Digite a marca: ')
    
    var jsonSerializado = JSON.stringify(carro)
    var caminhoDoArquivo = 'data/carro.json'
    fs.writeFileSync(caminhoDoArquivo, jsonSerializado)
    
    console.log(carro)