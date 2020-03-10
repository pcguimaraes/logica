var rs = require('readline-sync')
numero = 0
par = 2
for(i = 1; i < 51; i++){
    if(!(i % par)){
        console.log(i + ' par')
    }else{
        console.log(i % i != 0)
        if(i % i == 0){
            console.log(i + ' impar - PRIMO') 
        }else{
        console.log(i + ' impar') 
        }        
    }
}