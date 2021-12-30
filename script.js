const cor1 = document.getElementsByClassName('color')[0];
const cor2 = document.getElementsByClassName('color')[1];
const cor3 = document.getElementsByClassName('color')[2];
const cor4 = document.getElementsByClassName('color')[3];

function adicionandCores() {
  cor1.style.backgroundColor = '#000000';
  cor2.style.backgroundColor = '#999520';
  cor3.style.backgroundColor = '#513520';
  cor4.style.backgroundColor = '#899999';
}
adicionandCores();

const quadro = document.getElementById('pixel-board');

function quadroDePixels(quadrados) {
  for (let index = 0; index < quadrados; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = '#FFFFFF';
    quadro.style.width = `${Math.sqrt(quadrados) * 40}px`;
    quadro.style.height = `${Math.sqrt(quadrados) * 40}px`;
    quadro.appendChild(pixel);
  }
}
quadroDePixels(25);

function corInicial() {
  cor1.classList.add('selected');
}
corInicial();

const paletaDeCores = document.getElementById('color-palette');

function selecionandoCorParaUso(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}

paletaDeCores.addEventListener('click', selecionandoCorParaUso);
