// Antes do rest/spred

function soma() {
  let soma = 0;

  /**
   * Mesmo sem declarar os parametros da function, ela pode receber,
   * ficando armazenados na variavel arguments
   */
  for (i in arguments) {
    soma += i;
  }

  return soma;
}

soma(); // 0
soma(1, 1); // 2
soma('a', 'b'); // 0ab
