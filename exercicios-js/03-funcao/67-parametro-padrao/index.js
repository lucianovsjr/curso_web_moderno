// Estrategia 1
function soma1(a, b) {
  a = a || 1;
  b = b || 1;

  return a + b;
}

soma1(); // 2
soma1(0, 0); // 2, ocorrerá um bug por causa que zero é considerado false

// Estrategia 2, 3 e 4.
function soma2(a, b, c) {
  a = a !== undefined ? a : 1; // Somente irá receber 1 se não for passado nada
  b = 1 in arguments ? b : 1; // Se for passado um segundo parametro
  c = isNaN(c) ? 1 : c; // Verifica se não é um numero. Das 4 estrategias essa é a melhor.

  return a + b + c;
}

soma2() // 3

// Valor padrão do es2015. Estrategia ideial!
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

soma3(); // 3
