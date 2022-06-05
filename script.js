var pontos = 0;
var questao = 0;

var tryAgain = document.getElementById("tentarNovamente");
tryAgain.style.display = 'none';

function perguntas(pergunta, alternativaCerta, tentativa){

    //div com id ex: p1-alternativas
    const alternativas = document.getElementById('p' + pergunta + '-alternativas');
    const buttons = alternativas.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'red';
    }

    const botaoCerto = document.getElementById('p' + pergunta + alternativaCerta);
    botaoCerto.style.backgroundColor = 'green';

    if (tentativa == alternativaCerta) {
        pontos++;
        console.log(pontos);
    }
}

function mostrarPontos() {
    const pontuacao = document.getElementById('numAcertos');
    pontuacao.innerText = pontos + "/10";
}

function proxima() {
    questao++;
    const questaoAtual = document.getElementById('p' + questao);
    const questaoAnterior = document.getElementById('p' + (questao - 1));
    const inicio = document.getElementById('p' + (questao - 1));
    const tentarNovamente = document
    
    questaoAtual.style.display = 'flex';
    questaoAtual.style.backgroundcolor = '#6b3ebe';
    questaoAnterior.style.display = 'none';
    inicio.style.display = 'none';
    tryAgain.style.display = 'flex';
    
    if (questao == 11) {
        mostrarPontos();
        tryAgain.style.display = 'none';
    }
}
