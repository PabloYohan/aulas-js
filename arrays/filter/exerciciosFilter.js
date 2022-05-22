const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47}
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
const cincoOuMais = pessoas.filter(pessoa => pessoa.nome.length >= 5);
console.log(cincoOuMais);

//Retorne as pessoas com mais de 50 anos
const cinquentaOuMais = pessoas.filter(pessoas => pessoas.idade >= 50);
console.log(cinquentaOuMais);

//Retorne as pessoas cujo nome termina com a

const terminaA = pessoas.filter(pessoas => {
  let tamanho = pessoas.nome.length;
  return pessoas.nome[tamanho - 1] === 'a';
})

console.log(terminaA);