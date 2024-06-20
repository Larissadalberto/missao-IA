const caixaPrincipal = document.querySelector('caixa-principal');
const caixaPerguntas = document.querySelector('caixa-perguntas');
const caixaAlternativas = document.querySelector('caixa-alternativas');
const caixaResultado = document.querySelector('caixa-resultado');
const textoResultado = document.querySelector('texto-resultado');

const perguntas = [
    {
     enunciado: "Assim que saio da escola você se depara com uma tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
     alternativas: [
        "Isso é assustador!",
        "Isso é maravilhoso!"
     ]
    },
    
    {
        enunciado:"Com a descoberta dessa tecnologia, chamada Inteligência Artificial(AI), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontar informaçãos relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
        ]
    },

    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizda a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhor habilidades humanas.",
            "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
        ]
    },

    {
        enunciado: "Ao final da discução, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            "Criar uma imagem utilizando uma plataforma de desing como Paint.",
            "Criar uma imagem utilizande um gerador de imgem de IA."
        ]
    },

    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrazado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que está totalmente igual ao do chat. o que você faz?",
        alternativas:[
            "Escrever comandos para o chat é uma forma de contribuir para o trabalho, por isso não é problema utilizar o texto inteiro.",
            "O chat pode ser uma técnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas=document.createElement("button")
        botaoAlternativas.textContent=alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

