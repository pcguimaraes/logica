/* Elabore um programa para testar se uma senha é igual a "batatafrita".
    correta: acesso permitio
    errada: vc nao tem acesso ao sistema
*/
var rs = require('readline-sync')
var senhaCorreta = 'batatafrita'
var senhaDigitada = rs.question('Digite a senha: ')

if(senhaCorreta == senhaDigitada){
    console.log('Acesso Permitido')
}else{
    console.log('Voce nao tem acesso ao sistema')
}