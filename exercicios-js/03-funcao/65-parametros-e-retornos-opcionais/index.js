function area(largura, altura) {
  // Caso alguma variável não seja do tipo number, a function irá retornar NaN
  const area = largura * altura;

  if (area > 20) {
    console.log(`Valor acima do permitido ${area}.m2`);
    // Irá retorna undefined
  } else {
    return area;
  }
}
