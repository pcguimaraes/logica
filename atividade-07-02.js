/* (INNER JOIN) Faça um algoritmo que receba o nome e dois jogadores e após isso
    peça 5 números de 1 a 10 paa cada jogaor. Primeiro para o jogador A e depois
    para o jogaor B.
    Após a escolha de cada jogador o algoritmo eve apresentar quais foram os
    números iguais que o jogador A e B colocaram.
*/
var numerosA = []

for(i = 0; i < 5; i++){
    numerosA[i] = readlineSync.questionInt('Digite um numero entre 1 e 10: ')
}