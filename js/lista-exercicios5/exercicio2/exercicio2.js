// Crie uma função chamada onlyPositiveNumbers que recebe um array de 40 posições. Percorra e atribua valor 0 para todos os elementos que possuírem valores negativos.

function onlyPositiveNumbers() {
  //cria a array com 40 posições
  posicoes = [
    0, 1, 2, -3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, -23, 24, 25, 26, 27, 28, 29, 30, 31, 32, -33, 34, 35, 36, 37, 38,
    39,
  ];

  //cria um loop para o array até dar seu tamanho máximo
  for (let i = 0; i < 40; i++) {
    if (posicoes[i] < 0) {
      posicoes[i] = 0;
    }
  }

  console.log(posicoes);
}

onlyPositiveNumbers();
