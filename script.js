var pontos = 0;

function perguntas(pergunta, alternativaCerta){

    //div com id ex: p1-alternativas
    const alternativas = document.getElementById('p' + pergunta + '-alternativas');
    const buttons = alternativas.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'red';
    }

    const botaoCerto = document.getElementById('p' + pergunta + alternativaCerta);
    botaoCerto.style.backgroundColor = 'green';

    if (botaoCerto == alternativaCerta) {
        pontos++;
    }
}

function proxima() {
    
}
