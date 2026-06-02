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

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const cidade = document.getElementById("cidade").value.trim();

    const mensagem = document.getElementById("mensagemFormulario");

    if (!nome || !email || !cidade) {

        mensagem.textContent =
            "Preencha todos os campos.";

        mensagem.className =
            "mensagem erro";

        return;
    }

    mensagem.textContent =
        "Formulário enviado com sucesso!";

    mensagem.className =
        "mensagem sucesso";

    formulario.reset();

});