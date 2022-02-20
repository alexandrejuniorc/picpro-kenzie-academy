// Crie uma função que leia três parametros (a, b e c) e mostre-os na ordem lida. Em seguida, mostre-os em ordem crescente e decrescente.

function ordemLida(a, b, c) {
  a = "primeiro";
  b = "segundo";
  c = "terceiro";

  let ordem = [b, a, c];
  console.log(ordem);

  let ordemCrescente = ordem.sort();
  console.log(ordemCrescente);

  let ordemDecrescente = ordem.reverse();
  console.log(ordemDecrescente);
}

ordemLida();
