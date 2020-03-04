/* Crie um programa que receba 3 entrada do usuario (cor, modelo, marca)
Crie um objeto (Carro) e atribua as entradas do usuário neste objeto.
No final o programa deve imprimir as informações do carro.
Utilize a criação de objtos para resolver este problema. */
var carro = new Object()
carro.cor = rs.question('Digite a cor do carro: ')
carro.modelo = rs.question('Digite o modelo do carro: ')
carro.marca = rs.question('Digite a marca: ')

var jsonSerializado = JSON.stringify(carro)
var caminhoDoAruivo = 'data/carro.json'
fs.writeFileSync(caminhoDoAruivo, jsonSerializado)

console.log(carro)