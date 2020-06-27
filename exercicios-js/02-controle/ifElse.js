const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
}

imprimirResultado(10);
imprimirResultado(4);

// JS nao lanca um erro por ser fracamente tipada
imprimirResultado('Oi');
