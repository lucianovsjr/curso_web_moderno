// compara valor e nao o tipo
console.log('01)', '1' == 1);
// estritamente igual, os tipos sao diferentes
console.log('02)', '1' === 1);
//Apenas o valor
console.log('03)', '3' != 3);
//Estritamente difrente, tipos diferentes
console.log('04)', '3' !== 3);

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

//1° de janeiro de 1970
const d1 = new Date(0);
const d2 = new Date(0);
//Compara as referencias de memoria
console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
//Comparando numeros
console.log('11)', d1.getTime() === d2.getTime());

console.log('12)', undefined == null);
console.log('12)', undefined === null);

// Regra: usar o estritamente igual
