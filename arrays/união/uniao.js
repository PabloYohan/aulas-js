//Retrone a soma de todos os pares

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pares = numeros.filter(valor => valor % 2 === 0);
const paresDobrados = pares.map(valor => valor * 2);
const soma = paresDobrados.reduce(((acumulador, valor) => acumulador + valor), 0);
console.log(pares);
console.log(paresDobrados);
console.log(soma);