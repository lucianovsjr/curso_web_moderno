const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let x in nums) {
    if(x == 5) {
        /*
            Sai do for
            Funciona: Estrutura de repeticao e no switch
        */
        break;
    }
    console.log(`${x} = ${nums[x]}`);
}

for(let y in nums) {
    if(y == 5) {
        /*
            Interrompe a repeticao atual e vai para a proxma
            Funciona: Estrutura de repeticao
        */
        continue;
    }
    console.log(`${y} = ${nums[y]}`);
}

// Rotulo -> Nao utilizado
externo:
for(a in nums) {
    interno:
    for(b in nums) {
        if(a == 2 && b == 3) {
            // break de um for mais externo
            break externo;
        }
        console.log(`Par = ${a}, ${b}`);
    }
}
