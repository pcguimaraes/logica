var moduloArbyte = function(){
    console.log("ola meu modulo")
}

var moduloArbyte2 = function(){
    console.log('Arbyte')
}

var carregaModulo = function(){
    for(i = 0; i < 101; i = i + 10){
        console.log(`CARREGANDO... ${i}%`)
    }
}

module.exports = {moduloArbyte, moduloArbyte2, carregaModulo}