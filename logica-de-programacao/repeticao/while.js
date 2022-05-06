// let i = 0;
// const nome = 'Pablo';

// while (i < nome.length) {
//   console.log(nome[i]);
//   i++;
// };

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 11;
let rand;

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}