const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.9));

/*
    Ternario: primeira ? segunda : terceira
    Primeira parte: Expressão que retorna t ou f
    Segunda parte: resultado caso t
    Terceira parte: resultado caso f
*/
