/* Escreva um programa que passe por todos os numeros de 1 a 50 e para caa um deles
imprima na tela se o numero é par ou impar. Caso o numero também seja primo, o
prorama eve dizer ue ele é primo (numero ue so é divisível por ele mesmo e por 1).
Dica: neste exercício você pode precisar de ajuda do operador módulo (%). Você também pode precisar criar mais de um loop. */

var conta = 1
var ultimo = 50
var m = 0
var numiv = 0
var primo = "PRIMO"

while(conta <= ultimo){
    if(conta % 2 > 0){
        console.log(`${conta} ÍMPAR`)
    }else{
        console.log(`${conta} PAR`)
    }
  
    

    m = 2
    while(m < conta){
        if(conta%m==0){
            numdiv++
            primo = "PRIMO"
        }
        if(numdiv > 0){
            primo = ""
        }
    }


    console.log(par_impar)
    conta++
}



