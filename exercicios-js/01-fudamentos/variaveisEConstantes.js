/*
    Palavras reservadas que criam variáveis.
    Identificador, atribuidor e valor.
    Regra geral utilizar let.
*/
var a = 3
let b = 4

var a = 30
//SyntaxError: Identifier 'b' has already been declared
//let b = 40 
b = 40

console.log(a, b)

const c = 5
//TypeError: Assignment to constant variable.
//c = 50
console.log(c)