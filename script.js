let imagemDasJogadas = document.getElementsByTagName("img")
let imagemJogadasInimigo = document.querySelectorAll(".game-imgs-inimigo  img")
var atributoOpt = ""
var atributoOptOponente = ""
//console.log(resultadoDoJogo)
//console.log(imagemDasJogadas[3])
//alert(imagemDasJogadas.length)

function quemGanhou() {
    let resultadoDoJogo = document.querySelector(".resultadoDoJogo")
    //console.log(resultadoDoJogo)
    //alert(atributoOpt)
    //alert(atributoOptOponente)

    if (atributoOpt == "papel") {

        if (atributoOptOponente == "papel") {
            resultadoDoJogo.innerHTML = "Deu empate"
        } else if (atributoOptOponente == "pedra") {
            resultadoDoJogo.innerHTML = "Parabéns, você ganhou"
        } else if (atributoOptOponente == "tesoura") {
            resultadoDoJogo.innerHTML = "Você perdeu, tente novamente"
        }

    }

    if (atributoOpt == "pedra") {

        if (atributoOptOponente == "papel") {
            resultadoDoJogo.innerHTML = "Você perdeu, tente novamente"
        } else if (atributoOptOponente == "pedra") {
            resultadoDoJogo.innerHTML = "Deu empate"
        } else if (atributoOptOponente == "tesoura") {
            resultadoDoJogo.innerHTML = "Parabéns, você ganhou"
        }

    }

    if (atributoOpt == "tesoura") {

        if (atributoOptOponente == "papel") {
            resultadoDoJogo.innerHTML = "Parabéns, você ganhou"
        } else if (atributoOptOponente == "pedra") {
            resultadoDoJogo.innerHTML = "Você perdeu, tente novamente"
        } else if (atributoOptOponente == "tesoura") {
            resultadoDoJogo.innerHTML = "Deu empate"
        }

    }

}


function resetandoOpacidadeInimigo() {
    for(let i = 0; i < imagemJogadasInimigo.length; i++) {
        if(i == imagemJogadasInimigo) {
            imagemJogadasInimigo[i].style.opacity = 0.3
        }
    }
}



function jogadaOponente() {
    let gerandoNumeroAleatorioOponente = Math.floor(Math.random() * 3)
    const imagemJogadasInimigo = document.querySelectorAll(".game-imgs-inimigo  img")
    resetandoOpacidadeInimigo()
    for(let i = 0; i < imagemJogadasInimigo.length; i++) {
        if(i == gerandoNumeroAleatorioOponente) {
            imagemJogadasInimigo[i].style.opacity = 1
            atributoOptOponente = imagemJogadasInimigo[i].getAttribute("optOponente")
        }
    }
    quemGanhou()
    //alert(atributoOpt)
    //alert(atributoOptOponente)
}


function resetandoOpacidade() {
    for(let i = 0; i < imagemDasJogadas.length; i++) {
        imagemDasJogadas[i].style.opacity = 0.2;
    }
}


for(let i = 0; i < imagemDasJogadas.length; i++) {
    imagemDasJogadas[i].addEventListener("click", (identificador) => {
        resetandoOpacidade()
        identificador.target.style.opacity = 1
        atributoOpt = identificador.target.getAttribute("opt");
        jogadaOponente()
    });

}

