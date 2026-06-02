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

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cidade = document.getElementById("cidade");

    const mensagem =
        document.getElementById("mensagemFormulario");

    nome.classList.remove("campo-erro", "campo-sucesso");
    email.classList.remove("campo-erro", "campo-sucesso");
    cidade.classList.remove("campo-erro", "campo-sucesso");

    let valido = true;

    if (nome.value.trim() === "") {

        nome.classList.add("campo-erro");
        valido = false;

    } else {

        nome.classList.add("campo-sucesso");
    }

    if (email.value.trim() === "") {

        email.classList.add("campo-erro");
        valido = false;

    } else {

        email.classList.add("campo-sucesso");
    }

    if (cidade.value.trim() === "") {

        cidade.classList.add("campo-erro");
        valido = false;

    } else {

        cidade.classList.add("campo-sucesso");
    }

    if (!valido) {

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

    nome.classList.remove("campo-sucesso");
    email.classList.remove("campo-sucesso");
    cidade.classList.remove("campo-sucesso");

});