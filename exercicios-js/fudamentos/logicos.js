/*
    Binario:
        v e v -> v
        v e f -> f
        f e * -> f
        e/&& => Todos devem ser verdadeiros.

        v ou * -> V
        ou/|| => Basta um para ser verdadeiro.

        v xor v -> f
        v xor f -> v
        f xor v -> v
        f xor f -> f
        xor/!= => Os dois tem que ser diferente.

    Unario:
        !v -> f
        !f -> v
        Negação/! => Negacao logica.
*/

function compras(trabalho1, trabalho2) {
    /*
        Operador curto circuito:
            Quando o primeiro opernado ja determinar o resultado,
            o operando restantes e ignorado.
    */
    const comprarSorvete = trabalho1 || trabalho2;
    const compraTv50 = trabalho1 && trabalho2;
    //const compraTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const compraTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

    // Automaticamente ira criar a chave para os valores -> ES2015
    return {
        comprarSorvete,
        compraTv50,
        compraTv32,
        manterSaudavel
    };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));