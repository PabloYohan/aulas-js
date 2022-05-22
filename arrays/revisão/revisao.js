// const novo = [...nomes]; cópia do array
// novo.pop();
const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes.pop(); remove o ultimo elemento do array
// nomes.shift(); remove o primeiro elemento array e desloca os ídices
// nomes.push('João'); adiciona no final do array
// nomes.unshift('João'); adiciona no inicio do array e desloca os índices
const novo = nomes.slice(1, 3);
console.log(novo);

console.log(nomes);