const btnSortear = document.querySelector('.sortear');
const textarea = document.querySelector('#entradaNomes');
const tagResultado = document.querySelector('.resultado p');

const btnSortearNum = document.querySelector('.sortearNum');
const inputNumList = document.querySelector('#entradaNumeros');
const tagResultadoNum = document.querySelector('.resultadoNum p');

const sorteioNomesDiv = document.querySelector('#sorteioNomes');
const sorteioNumerosDiv = document.querySelector('#sorteioNumeros');

document.getElementById('btnNomes').addEventListener('click', function() {
    sorteioNomesDiv.style.display = 'block';
    sorteioNumerosDiv.style.display = 'none';
});

document.getElementById('btnNumeros').addEventListener('click', function() {
    sorteioNomesDiv.style.display = 'none';
    sorteioNumerosDiv.style.display = 'block';
});

function pegarDadosFormulario() {
    const valorCampo = textarea.value;
    const listaNomes = valorCampo.split(",");
    const tamanhoArray = listaNomes.length;
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray);
    const nome = listaNomes[posicaoNome].trim();
    mostrarResultado(nome);
    textarea.value = "";
}

function pegarDadosFormularioNum() {
    const valorCampo = inputNumList.value;
    const listaNumeros = valorCampo.split(",").map(num => parseInt(num.trim()));
    const posicaoNumero = gerarNumeroAleatorio(listaNumeros.length);
    const numero = listaNumeros[posicaoNumero];
    mostrarResultadoNum(numero);
}

function gerarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function mostrarResultado(nome) {
    tagResultado.innerHTML = `Resultado: ${nome}`;

    popUpResultado.classList.add("Resultado");
}

function mostrarResultadoNum(num) {
    tagResultadoNum.innerHTML = `Resultado: ${num}`;
}

btnSortear.addEventListener('click', pegarDadosFormulario);
btnSortearNum.addEventListener('click', pegarDadosFormularioNum);