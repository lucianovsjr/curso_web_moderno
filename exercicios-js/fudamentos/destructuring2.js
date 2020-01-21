const [a] = [10];
console.log(a);

const lista1 = [10, 7, 9, 8];
const [n1, , n3, , n5, n6 = 0] = lista1;
console.log(n1, n3, n5, n6);

const lista2 = [[1, 2], [10, 11]];
const [, [, nota]] = lista2;
console.log(nota);