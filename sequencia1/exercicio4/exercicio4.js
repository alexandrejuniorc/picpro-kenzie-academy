// Crie três variaveis: 'numero1', 'numero2' e 'soma'
// Atribua numero1 + numero2 para a variável 'soma'
// Descomente a última linha

let numero1 = 9;
let numero2 = 7;
let soma = numero1 + numero2;

alert("A soma de " + numero1 + " com " + numero2 + " é " + soma);

if (numero1 !== undefined && numero2 !== undefined && soma !== undefined) {
  const mensagem = document.getElementById("mensagem");
  mensagem.classList.remove("hidden");
}
