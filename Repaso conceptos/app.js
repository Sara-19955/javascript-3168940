const img = document.querySelector('#imagen');
const btnBlancoNegro = document.querySelector('#btnBlancoNegro');
const btnDesenfoque = document.querySelector('#btnDesenfoque');
const btnRotar = document.querySelector('#btnRotar');

let enBlancoNegro = false;
let desenfocado = false;
let rotado = false;

function actualizarEstilos() {
  let filtros = [];
  let transformaciones = [];

  if (enBlancoNegro) filtros.push('grayscale(100%)');
  if (desenfocado) filtros.push('blur(4px)');
  img.style.filter = filtros.join(' ') || 'none';

  if (rotado) transformaciones.push('scale(1.15)', 'rotate(15deg)');
  else transformaciones.push('scale(1)', 'rotate(0deg)');
  img.style.transform = transformaciones.join(' ');
}

btnBlancoNegro.addEventListener("click", function() {
  enBlancoNegro = !enBlancoNegro;
  actualizarEstilos();
});

btnDesenfoque.addEventListener("click", function() {
  desenfocado = !desenfocado;
  actualizarEstilos();
});

btnRotar.addEventListener("click", function() {
  rotado = !rotado;
  actualizarEstilos();
});
