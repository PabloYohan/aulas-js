const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 64},
  {nome: 'Wallace', idade: 47}
];

//Retorne a pessoa mais velha

const maisVelha = pessoas.reduce((acumulador, pessoa) => {
  if(acumulador.idade > pessoa.idade) return acumulador;
  return pessoa;
});
console.log(maisVelha);