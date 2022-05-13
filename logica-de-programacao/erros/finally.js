try {
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou um erro');
} catch (e) {
  console.log('Tratei o erro');
} finally {
  console.log('Fechei o arquivo');
  console.log('Sempre é executado no finally');
}