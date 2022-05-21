function* gerador1(){
  yield "Valor 1";

  yield 'Valor 2';

  yield "valor 3";
}

const g1 = gerador1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);