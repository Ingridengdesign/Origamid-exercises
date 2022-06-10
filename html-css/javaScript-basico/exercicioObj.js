function livro(nome, ano, autor){
    let nomeUp = nome.toUpperCase();
    let anoDif = 2050 - ano;
    let frase = nome + ' por ' + autor;
    let livroObj = {
        nomeUp,
        anoDif,
        frase
    }
    return livroObj;
}
const teste = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

console.log(teste.frase); 