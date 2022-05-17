//Declaração - ocorre Function hoistng(Elvação das funções)
function falaOi(){
  console.log('Oi');
}
falaOi();

//Funções são First-class objects(Objetos de primeira classe)
const Dado = function() {
  console.log('Dado');
}

function executaFuncao(funcao){
  funcao();
}
executaFuncao(Dado);

// Arrow function
const funcaoArrow = () => {
  console.log('Arrow');
}
funcaoArrow();