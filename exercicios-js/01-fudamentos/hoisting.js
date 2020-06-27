/*
    Efeito de hoisting:
    Içamento => Joga a declaração da variável para o topo.
*/
//Ocorre o efeito
console.log('a = ', a);
var a = 2;
console.log('a = ', a);

//Nao ocorre o efeito
//ReferenceError: Cannot access 'b' before initialization
//console.log('b = ', b);
let b = 2;
console.log('b = ', b);