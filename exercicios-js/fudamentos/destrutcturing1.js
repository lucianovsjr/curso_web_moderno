// ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

// Tirar nome e idade de pessoa
const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, humor = true } = pessoa;
console.log(sobrenome, humor);

const { endereco: { logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);

//TypeError: Cannot destructure property `ag` of 'undefined' or 'null'.
//const { conta: {ag, num} } = pessoa;
//console.log(ag, num);