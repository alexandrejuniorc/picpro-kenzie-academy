// Crie uma função que recebe inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.
function somaDosPares(valor) {
  let pares = 0;
  /* loop que mostra os valores pares  */
  for (let i = 0; i < valor; i++) {
    if (i % 2 == 0) {
      soma = i;
      console.log("Esses é um valor par: ", soma);
    }
  }
  /* loop que mostra os valores impares */
  for (let i = 0; i < valor; i++) {
    if (i % 2 !== 0) {
      pares = i;
      console.log("Esse é um valor impar: ", pares);
    }
  }

  return soma;
}
somaDosPares(10);
