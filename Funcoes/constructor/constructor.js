//Função construtora -> objetos
//Função fabrica -> objetos
//Construtora -> Pessoa(new)

function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = nome;
}

const p1 = new Pessoa('Pablo', 'Yohan');
const p2 = new Pessoa('João', 'Otávio');