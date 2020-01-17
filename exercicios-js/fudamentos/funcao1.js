/*
    Não é obrigatório que uma função retorne um valor
    Função: Bloco de código nomeado.
*/

// Sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
// Possivel não passar todos ou nenhum
imprimirSoma(2);
imprimirSoma();
// Irá ignorar o restante. Não irá reclamar
imprimirSoma(1, 2, 3, 4, 5);

/*
    Com retorno.
    b recebe como default 0.
*/
function soma(a, b = 10) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(5));