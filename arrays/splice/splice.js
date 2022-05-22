const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2, ...)

// pop: const removidos = nomes.splice(-1, 1);
// shift: const removidos = nomes.splice(0, 1);
// push: const removidos = nomes.splice(nomes.length, 0, 'Pablo');
// unshift: const removidos = nomes.splice(0, 0, 'Pablo');
const removidos = nomes.splice(3, 2, 'Pablo', 'Yohan');

console.log(nomes, removidos);