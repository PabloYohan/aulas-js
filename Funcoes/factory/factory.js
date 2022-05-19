//Factory function
function criaPessoa(nome, sobrenome, altura, peso){
  return{
    nome,
    sobrenome,
    peso,
    altura,
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`
    },
    set nomeCompleto(valor){
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
    get imc() {
      const indice = this.peso/(this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Pablo', 'Yohan', 1.77, 60);
console.log(p1.imc);
p1.nomeCompleto = "Luis Yohan dos Santos Dias"
console.log(p1.nomeCompleto);