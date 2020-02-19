/* Escreva um programa que passe por todos os numeros de 1 a 50 e para caa um deles
imprima na tela se o numero é par ou impar. Caso o numero também seja primo, o
prorama eve dizer ue ele é primo (numero ue so é divisível por ele mesmo e por 1).
Dica: neste exercício você pode precisar de ajuda do operador módulo (%). Você também pode precisar criar mais de um loop. */

conta = 1
ultimo = 50

while(conta <= ultimo){
    if(conta % 2 > 0){
        
        var contaPrimo = conta
        while(contaPrimo > 0){
            if(conta % contaPrimo > 0){
            }
            contaPrimo--
        }

        console.log(`${conta} ÍMPAR`)
    }else{
        console.log(`${conta} PAR`)
    }
    conta++
}