// Crie uma função que receba um array com dez números e usando laços de repetição calcule e mostre a quantidade de números entre 30 e 90.

function quantidadeNumeros() {
  let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  let resultado = 0;

  let somaQuantidade = 0;

  //mostra os números entre 30 e 90
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 30 && 90) {
      resultado = arr[i];
      console.log(resultado);
    } else {
      somaQuantidade[i] += arr[i];
      console.log(somaQuantidade);
    }
  }
}

quantidadeNumeros();
