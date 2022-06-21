// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
var resultado = 35;

console.log(total == resultado);

// Crie duas expressões que retornem NaN

var exp = '2s';
var exp2 = 'a12'

console.log(isNaN(exp));
console.log(isNaN(exp2));

// Somar a string '200' com o número 50 e retornar 250
var duzentos = +'200';
var cinquenta = 50;

console.log(duzentos + cinquenta);
// Incremente o número 5 e retorne o seu valor incrementado

var cinco = 5;
console.log(cinco++);
console.log(cinco);
// Como dividir o peso por 2?
var numero = +'80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2; // NaN (Not a Number)

console.log(pesoPorDois+unidade);
