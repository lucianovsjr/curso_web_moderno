/**
 * Função é tratada como um dado, pode ser passada como parametro, retornada em uma function e armazenada em uma variavel;
 *
*/

// Forma literal
function func01() {
  // Retorna undefined caso não tenha o return
}

// Armazenar em uma variável uma função anonima
const func02 = function() {};

// Armazenar em um array
const funcs01 = [
  function(a, b) { return a + b; },
  func01,
  func02
];

// Armazenar em atributos de objetos
const funcs02 = {};
funcs02.func01 = func01;
funcs02.falar = function() { return 'Oi'; };

// Passar uma function como param
function func03(func) {
  func();
}

// Uma function pode retornar outra function
function func04(a, b) {
  return function(c) {
    return a + b + c;
  }
}
