const imagem = document.querySelector('img');
const imagemDois = document.querySelector('#imgm');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const nomePersonagemDois = document.querySelector('#nomme');
const especie = document.querySelector('#especie');
const condiçao = document.querySelector('#condicao');



gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}
pegarPersonagem = () => {
    let numeroAleatorioDois = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioDois}`, {
        method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json'
            }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;

    });
}

erarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagemDois = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json'
            }
    }).then((response) => response.json()).then((data) => {
        imagemDois.src = data.image;
        imagemDois.alt = data.name;
        nomePersonagemDois.innerHTML = data.name;

    });
}

mostrarPersonagem = () => {
    pegarPersonagem();pegarPersonagemDois();
}


botao.onclick = mostrarPersonagem;