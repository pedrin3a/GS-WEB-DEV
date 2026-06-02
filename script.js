console.log("OrbitEye carregado!");
const slides = document.querySelectorAll(".slide");

let slideAtual = 0;

function trocarSlide() {

    slides[slideAtual].classList.remove("ativo");

    slideAtual++;

    if (slideAtual >= slides.length) {

        slideAtual = 0;

    }

    slides[slideAtual].classList.add("ativo");
}

setInterval(trocarSlide, 4000);