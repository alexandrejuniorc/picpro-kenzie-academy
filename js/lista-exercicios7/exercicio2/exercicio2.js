// Crie uma função chamada convertTime que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.

function convertTime(anos, meses, dias) {
  /* converte anos em dias */
  let retornaAnosDias;
  retornaAnosDias = anos * 365;

  /* converte meses em dias */
  let retornaMesesDias;
  retornaMesesDias = meses * 30;

  /* converter dias em dias */
  let retornaDiasDias;
  retornaDiasDias = dias * 1;

  /* converte tudo somente em dias */
  let idadeEmdias;
  idadeEmdias = retornaAnosDias + retornaMesesDias + retornaDiasDias;

  console.log(idadeEmdias);
}

convertTime(20, 10, 12);
