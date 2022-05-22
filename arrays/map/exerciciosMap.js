const pessoas = [
  {nome: 'Luiz', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47}
];

//Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);

//Remova apenas a chave 'nome' do objeto
const idades = pessoas.map(pessoa => ( { idade: pessoa.idade }));
console.log(idades);

// Adicione uma chave id em cada objeto 
const Id = pessoas.map((pessoas, indice) => ({ nome: pessoas.nome, idade: pessoas.idade, Id: indice}));
console.log(Id);
console.log(pessoas);



