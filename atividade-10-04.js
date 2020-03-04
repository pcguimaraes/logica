/* Faça um programa que perunte ao usuário se ele quer adicionar ou apenas exibir,
    caso o usuário escolha adicionar, altere o programa inicial de cadastro de carro
    para ue não salve 1 objeto carro e sim uma coleção de carros
    (utilizando arrays, em vez de serializar/deserializar o objeto ue esrá array que possui os carros)
Após cadastrar o carro o programa eve novamente solicitar o usuário se quer exibir ou adicionar,
cao o usuário escolha exibir eve ser exibido toos os carros cadastrados. */


console.log("ABC")

/**
function cadastraCarro(){
    var carro = new Object()
    carro.cor = rs.question('Digite a cor do carro: ')
    carro.modelo = rs.question('Digite o modelo do carro: ')
    carro.marca = rs.question('Digite a marca: ')
    return carro
}



/////////////////////////////////////////////////////////////////
var puxaJson = fs.readFileSync('data/carro.json')
var carros.push(carro) = JSON.parse(puxaJson)
console.log(carros)

console.log(cadastraCarro())
//console.log(cadastraCarro())