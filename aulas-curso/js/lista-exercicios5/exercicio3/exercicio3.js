// Crie uma função que receba um array. Percorra este array, some quantos números pares este array possuí e retorne a soma.

function numerosPares() {
  let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let soma = 0;

  for (let i = 0; i < valores.length; i++) {
    if (valores[i] % 2 === 0) {
      soma = valores[i];
      console.log(soma);
    }
  }
}

numerosPares();
