const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

// sera impresso o valor atual de i
funcs[2]();
funcs[8]();