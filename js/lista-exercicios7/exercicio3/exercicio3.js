// Crie uma função chamada isPrime que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico Verdadeiro caso o seja primo e Falso em caso contrário.

function isPrime(valor) {
  let retorno;

  if (valor % 2 == 0 || valor / valor == 0) {
    retorno = 0;
  } else {
    retorno = 1;
  }

  console.log(retorno);
}
isPrime();
