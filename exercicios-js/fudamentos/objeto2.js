/*
    Possivel criar instancias de funcoes.
    Classe e uma forma diferente de criar uma funcao.
*/
console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {}; // ES 2015 ES6
console.log(typeof Produto);
console.log(typeof new Produto());