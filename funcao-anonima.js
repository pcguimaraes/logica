// ARRO FUNCTION
function xicara(funcaoEsvazia){
    console.log('xicara que nao esvazia')
    funcaoEsvazia()
}
xicara(() => console.log('Esvaziou'))

// MAP
var alunos = ["Italo", "Vini", "Indira", "Italo"]
    // map com uma instrução.        
    alunos.map(aluno => console.log(aluno))
    // map com mais de uma linha / função.
    alunos.map(aluno => {
        if (aluno == "Vini"){
            console.log(aluno)
        }
    })

// INCLUDES
    alunos.includes("Italo")

// FILTER
    var idades = [2, 5, 6, 67, 18, 22]
    var filtrados = idades.filter(idade => {
        if(idade > 18){
            return true
        }else{
            return false
        }
    })
    console.log(filtrados.length)

/*
function xicara(a, b, c, d){
    console.log("eu sou uma xicara")
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}

xicara('italo', 22, [1,2,], {nome: 'italo'})
*/