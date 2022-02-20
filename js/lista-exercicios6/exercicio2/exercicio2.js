// Crie uma função que receba um array com a idade de dez pessoas. Calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

function calculoIdade() {
  let idadePessoas = [10, 29, 30, 40, 25, 17, 54, 45, 23, 20];

  let maioresDe18 = 0;

  for (i = 0; i < idadePessoas.length; i++) {
    if (idadePessoas[i] >= 18) {
      maioresDe18 = idadePessoas[i];
      console.log(maioresDe18);
    }
  }
}
calculoIdade();
