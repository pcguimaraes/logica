/* Faça um algoritmo que receba peso e altura do usuario e calcule o IMC.
    Para fazer o calculo o IMC utilize: fasam-imc-calc */
    const fasamImc = require('fasam-imc-calc');
    const imc = new fasamImc(80, 1.80); // peso, altura
     
    imc.calc();
    console.log(fasamImc.imc(5))
    // 24.69