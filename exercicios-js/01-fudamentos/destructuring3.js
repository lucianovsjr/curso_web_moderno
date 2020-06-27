/*
    Destructuring como parametro de uma funcao
*/
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
};

const obj = { max: 50, min: 40, outro: 500 };
console.log(rand(obj));
console.log(rand({}));
//TypeError: Cannot destructure property `min` of 'undefined' or 'null'
//console.log(rand());
