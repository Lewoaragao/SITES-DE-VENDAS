// SLIDER AUTOMÁTICO PÁGINA INICIAL

let time = 6000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#produtodestaque img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)

// MASK CELULAR

$(document).ready(function(){
    $('#telefone').mask("(99) 99999-9999");
});

// FOCANDO NO INPUT NOME

window.onload = function() {
    document.getElementById("nomecliente").focus();
}

// VERIFICANDO CONTATO E ENVIANDO MENSAGEM

function enviar()
{
    alert('Email enviado com sucesso.')
}


