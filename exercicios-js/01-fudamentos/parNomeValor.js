/*
    contexto lexico: local fisico que a variavel foi definida.
*/
const saudacao = 'Opa'; // contexto lexico 1

function exec() {
    const saudacao = 'Fala ae'; // contexto lexico 2
    return saudacao;
}

// Objeto sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        numero: 123
    }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);