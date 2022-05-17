// function funcao(){
//   let total = 0;
//   for(let argument of arguments){
//     total += argument;
//   }
//   console.log(total);
//   return total;
// }

// const valor = funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

// console.log(valor);

// function soma(a, b = 2, c = 4){
//   console.log(a+b+c);
// }
// soma(2);

function conta(operator, acumulador, ...numeros){
  for(let numero of numeros){
    if(operator === '+') acumulador += numero;
    if(operator === '-') acumulador -= numero;
    if(operator === '*') acumulador *= numero;
    if(operator === '/') acumulador /= numero;
  }
  console.log(acumulador);
}
conta('-', 0, 20, 30, 40, 50)