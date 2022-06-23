// Por qual motivo o código abaixo retorna com erros?

var cor = "preto";
const marca = "Fiat";
let portas = 4;

console.log(cor, marca, portas);
//o retorno estava constando var e não cor e let e const estão definidas apenas dentro do escopo sendo necessário remover as {}

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}

console.log(somarDois(4));

console.log(dividirDois(6));
// o dois não estava definido no escopo da função


// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);
