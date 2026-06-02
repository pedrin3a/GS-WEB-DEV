console.log("OrbitEye carregado!");
const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");
let slideAtual = 0;

function trocarSlide() {

    slides[slideAtual].classList.remove("ativo");
    indicadores[slideAtual].classList.remove("ativo-indicador");
    
    slideAtual++;

    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }

    slides[slideAtual].classList.add("ativo");
    indicadores[slideAtual].classList.add("ativo-indicador");
}

setInterval(trocarSlide, 4000);

function trocarTema(tema) {

    document.body.classList.remove(
        "tema-verde",
        "tema-escuro"
    );

    if (tema !== "azul") {

        document.body.classList.add(`tema-${tema}`);
    }

    localStorage.setItem("temaOrbitEye", tema);
}

const temaSalvo = localStorage.getItem("temaOrbitEye");

if (temaSalvo) {

    trocarTema(temaSalvo);
}