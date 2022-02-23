// Crie uma função chamada areOlder que recebe a idade de uma pessoa e retorna um boolean (true ou false) se a pessoa é de maior ou não.

function areOlder(idade) {
  let maiorDe18;

  let menorDe18;

  if (idade > 18) {
    maiorDe18 = true;
    console.log(maiorDe18);
  } else {
    menorDe18 = false;
    console.log(menorDe18);
  }

  return idade;
}

areOlder(24);
