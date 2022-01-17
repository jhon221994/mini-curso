const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#condicao');



gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}
pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
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

pegarPersonagemDois = () => {
    let numeroAleatorioDois = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioDois}`, {
        method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json'
            }
    }).then((response) => response.json()).then((data) => {
        imgm.src = data.image;
        imgm.alt = data.name;
        nomme.innerHTML = data.name;
        especiee.innerHTML = data.species;
        condicaoo.innerHTML = data.status;

    });
}

pegarPersonagemTres = () => {
    let numeroAleatorioTres = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioTres}`, {
        method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json'
            }
    }).then((response) => response.json()).then((data) => {
        imgmm.src = data.image;
        imgmm.alt = data.name;
        nommme.innerHTML = data.name;
        especieee.innerHTML = data.species;
        condicaooo.innerHTML = data.status;

    });
}

mostrarPersonagem = () => {
    pegarPersonagem();
    pegarPersonagemDois();
    pegarPersonagemTres();
}

botao.onclick = mostrarPersonagem;