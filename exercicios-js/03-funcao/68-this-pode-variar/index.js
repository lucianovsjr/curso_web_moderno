/*
  This, acessa o dono do escopo em que esta;
  Caso uma função for declarada com function o this pode variar,
  no caso de arrow function, terá o this apontado para o escopo em que foi definido.
*/

// No browser o this aponta para um objeto global
function teste1() {
  console.log(this === window);
}
teste1(); // true

const teste2 = () => { console.log(this === window); }
teste2(); // true

// this, não pega o escopo global. Esta apontando para o elemento que foi clicado
document.getElementById('body').onClick = teste1(); // false
document.getElementById('body').onClick = teste2(); // true
