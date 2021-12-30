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

function quadroDePixels(colunas) {
  for (let index = 0; index < colunas; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = '#FFFFFF';
    quadro.appendChild(pixel)
  }
}

quadroDePixels(25);