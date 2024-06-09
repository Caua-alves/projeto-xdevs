const btnAvancar = document
    .getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

btnAvancar.addEventListener("click", function () {




    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;

    esconderCartaoselecionado();


    cartaoAtual++;
    mostrarCartao();


})



 
btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if (ehPrimeiroCartao) return;


    esconderCartaoselecionado();

    cartaoAtual--;
    mostrarCartao();


})

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoselecionado() {
    const cartapSelecionado = document.querySelector('.selecionado');
    cartapSelecionado.classList.remove('selecionado');
}
