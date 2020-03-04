/* Fazer um programa ue leia um valor de DDI e informe o nome do país correspondente ao DDI.
    Deve também imprimir uma mensagem caso o I não esteja cadastrado. */
var rs = require('readline-sync')
var ddi = rs.questionInt('Digite o numero do DDI: ')
var pais = ""

if(ddi == 1){pais = "Estados Unidos"}
else if(ddi == 35){pais = "Portugal"}
else if(ddi == 49){pais = "Alemanha"}
else if(ddi == 54){pais = "Argentina"}
else if(ddi == 55){pais = "Brasil"}
else{console.log(`Nao ha cadastro para o DDI ${ddi}.`)}

if(pais != 0){
    console.log(`O DDI ${ddi} eh corresponente ao pais ${pais}.`)
}

