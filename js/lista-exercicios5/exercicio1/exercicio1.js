// Crie uma função chamada multiplyList que receba um array de números, um multiplicador e devolva a multiplicação de cada elemento do array pelo multiplicador. Exemplo:
//([1, 2, 3, 4, 5] , 3) deve retornar [3, 6, 9, 12, 15]

function multiplyList() {
  let numeros = [1, 2, 3, 4, 5];

  // Nesse caso o map vai pegar os index da Array 'numeros' e vai multiplicar um por um por 2 retornando uma nova array com os valores multiplicados.

  let multiplicador = numeros.map((x) => x * 3);

  console.log(multiplicador);
}

multiplyList();
