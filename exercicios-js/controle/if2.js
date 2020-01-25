function teste1(num) {
    // sem uso de chaves, soemnte aproxima senteca e associada
    if(num > 7)
        console.log(num);
    console.log('final');
}

//teste1(6);
//teste1(8);

function teste2(num) {
    // Cuidado, nao usar nas estruturas de controle
    if(num > 7); {
        console.log(num);
    }
}

teste2(6);
teste2(8);