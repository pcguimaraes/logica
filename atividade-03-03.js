/* Escreva um algoritmo que imprima todos os números ímpares de 1 até 100 */
var conta = 0
var cem = 100

while (conta < cem){
    conta = (conta + 1)
    if (conta % 2 != 0){
        console.log(conta)
    }
}