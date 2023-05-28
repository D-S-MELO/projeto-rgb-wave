window.addEventListener('load', start);

function start() {

  var vermelho = document.querySelector('#points1');
  var verde = document.querySelector('#points2');
  var azul = document.querySelector('#points3');

  vermelho.addEventListener('input', insertValue);
  verde.addEventListener('input', insertValue);
  azul.addEventListener('input', insertValue);
}

function insertValue(event) {

  var inputvalue1 = document.querySelector('#inputPoint1');
  inputvalue1.value = points1.value;

  var inputvalue2 = document.querySelector('#inputPoint2');
  inputvalue2.value = points2.value;

  var inputvalue3 = document.querySelector('#inputPoint3');
  inputvalue3.value = points3.value;

  var cor =
    'RGB(' +
    inputvalue1.value +
    ',' +
    inputvalue2.value +
    ',' +
    inputvalue3.value +
    ')';

  const paths = document.querySelectorAll('#svg path');

  // Definir a cor dos elementos <path>
  paths.forEach((path) => {
    path.style.fill = cor; // Substitua 'red' pela cor que desejar
  });

}
