var user = require('readline-sync')
var primo
var numeroPrimo = user.question('Digite o numero: ')
var contaPrimo = numeroPrimo - 1
var conta = 1
var ultimo = 50


while(contaPrimo > 1 ){
    numeroPrimo % contaPrimo
    if(numeroPrimo % contaPrimo != 0){
        primo = "primo"
    }else{
        primo = "nao primo"
        break
    }
    contaPrimo--
}

if(primo != "primo"){
    console.log(`${numeroPrimo} NAO EH um numero primo`)
}else{
    console.log(`${numeroPrimo} e um numero primo`)
}
