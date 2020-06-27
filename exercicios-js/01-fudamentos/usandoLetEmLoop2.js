const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

//Usando let, ira ter uma memoria dos valores usados
funcs[2]();
funcs[8]();