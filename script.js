console.log("OrbitEye carregado!");
// ========================================
// SLIDESHOW
// ========================================
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

// ========================================
// TROCA DE TEMAS
// ========================================

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
// ========================================
// FORMULÁRIO
// ========================================


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

// ========================================
// QUIZ ORBITEYE
// ========================================


const perguntas = [

    {
        pergunta: "O OrbitEye ajuda a monitorar:",
        opcoes: ["Filmes", "Clima", "Jogos", "Música"],
        correta: 1
    },

    {
        pergunta: "Qual tecnologia é usada pelo OrbitEye?",
        opcoes: ["Satélites", "Bicicletas", "Navios", "Aviões"],
        correta: 0
    },

    {
        pergunta: "O sistema pode ajudar a prevenir:",
        opcoes: ["Enchentes", "Provas", "Livros", "Trânsito"],
        correta: 0
    },

    {
        pergunta: "Os satélites observam:",
        opcoes: ["Apenas cidades", "Apenas oceanos", "O planeta Terra", "Apenas florestas"],
        correta: 2
    },

    {
        pergunta: "O OrbitEye fornece:",
        opcoes: ["Alertas climáticos", "Receitas", "Filmes", "Jogos"],
        correta: 0
    },

    {
        pergunta: "Queimadas podem ser detectadas pelo sistema?",
        opcoes: ["Sim", "Não"],
        correta: 0
    },

    {
        pergunta: "O monitoramento acontece:",
        opcoes: ["Em tempo real", "Uma vez por ano", "Uma vez por mês", "Nunca"],
        correta: 0
    },

    {
        pergunta: "Quem pode usar os dados?",
        opcoes: ["Defesa Civil", "Apenas astronautas", "Apenas pilotos", "Apenas professores"],
        correta: 0
    },

    {
        pergunta: "O OrbitEye está relacionado à:",
        opcoes: ["Indústria Espacial", "Indústria Musical", "Indústria Automotiva", "Indústria Têxtil"],
        correta: 0
    },

    {
        pergunta: "O principal objetivo é:",
        opcoes: ["Reduzir riscos climáticos", "Vender computadores", "Criar jogos", "Fazer vídeos"],
        correta: 0
    }

];

let perguntaAtual = 0;
let pontuacao = 0;

const btnQuiz = document.getElementById("btnQuiz");

btnQuiz.addEventListener("click", iniciarQuiz);

function iniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    document.getElementById("quizResultado").textContent = "";

    btnQuiz.textContent = "Quiz em andamento";

    mostrarPergunta();

}

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    const perguntaElemento =
        document.getElementById("quizPergunta");

    const opcoesElemento =
        document.getElementById("quizOpcoes");

    perguntaElemento.textContent =
        pergunta.pergunta;

    opcoesElemento.innerHTML = "";

    pergunta.opcoes.forEach((opcao, indice) => {

        const botao =
            document.createElement("button");

        botao.textContent = opcao;

        botao.addEventListener(
            "click",
            () => responder(indice)
        );

        opcoesElemento.appendChild(botao);

    });

}

function responder(indiceSelecionado) {

    const pergunta = perguntas[perguntaAtual];

    if (indiceSelecionado === pergunta.correta) {

        pontuacao++;

    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        finalizarQuiz();

    }

}

function finalizarQuiz() {

    const perguntaElemento =
        document.getElementById("quizPergunta");

    const opcoesElemento =
        document.getElementById("quizOpcoes");

    const resultadoElemento =
        document.getElementById("quizResultado");

    perguntaElemento.textContent =
        "Quiz finalizado!";

    opcoesElemento.innerHTML = "";

    let mensagem = "";
    let classeResultado = "";

    if (pontuacao <= 4) {

        mensagem =
            "Você precisa aprender mais sobre monitoramento climático e tecnologia espacial.";

        classeResultado =
            "resultado-ruim";

    }

    else if (pontuacao <= 7) {

        mensagem =
            "Bom conhecimento! Você já entende boa parte do projeto OrbitEye.";

        classeResultado =
            "resultado-medio";

    }

    else {

        mensagem =
            "Excelente! Você domina os conceitos principais do OrbitEye.";

        classeResultado =
            "resultado-bom";

    }

    resultadoElemento.className =
        classeResultado;

    resultadoElemento.innerHTML =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas.<br><br>${mensagem}`;

    btnQuiz.textContent =
        "Refazer Quiz";

}