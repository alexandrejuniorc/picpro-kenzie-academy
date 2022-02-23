// Crie uma função chamada isPerfect que verifique se um valor é perfeito ou não. Um valor é dito perfeito quando ele é igual a soma dos seus divisores excetuando ele próprio. (Ex: 6 é perfeito, 6 = 1 + 2 + 3, que são seus divisores). A função deve retornar um valor booleano.

function isPerfect(x) {
  let valor = 1;
  let divisores = 0;

  for (let i = 0; i < x; i++) {
    if (x % valor == 0) {
      divisores += valor;
      console.log(divisores);
    }
    if (divisores == x) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

isPerfect(6);
