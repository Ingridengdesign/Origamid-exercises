function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

function pi() {
  return 3.14;
}

var total = 4 * pi(); 

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(67, 1.55)); 

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
corFavorita(); // retorna 'Você não gosta de nada'

//isso é o mesmo que window.addEventListener
addEventListener('click', function() { 
  console.log('Clicou');
});

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(67, 1.55); // retorna o imc
console.log(imc2(67, 1.55)); // retorna o imc e undefined

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}
