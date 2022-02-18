// Crie uma função que receba um array de números retorne a soma dos primeiros 5 números ímpares desse array.

function numerosImpares() {
  let valores = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  let soma = 0;

  let valoresImpares = valores.slice(0, 10);

  for (i = 0; i < valoresImpares.length; i++) {
    if (valores[i] % 2 !== 0) soma = valoresImpares[i];
    console.log(soma);
  }
}
numerosImpares();
