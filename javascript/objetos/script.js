var pessoa = {
  nome: 'Ingrid',
  idade: 23,
  profissao: 'Designer & Desenvoldedora',
  possuiFaculdade: false,
}

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true


var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

console.table(quadrado);
console.table(pessoa);
