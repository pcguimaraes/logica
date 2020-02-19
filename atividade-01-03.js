/* Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. 
A senha válida é o número 1234. 
	Devem ser impressas as seguintes mensagens: 
	- ACESSO PERMITIDO caso a senha seja válida. 
	- ACESSO NEGADO caso a senha seja inválida.
 */

 var user = require('readline-sync')
 var senhaValida = "1234"
 var senhaUsuario = user.question('Digite uma senha valida: ')

 if (senhaValida == senhaUsuario){
	 console.log("ACESSO PERMITIDO")
 }else{
	 console.log("ACESSO NEGADO")
 }