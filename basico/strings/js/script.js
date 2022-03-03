const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `O seu nome é: ${nome} <br />`
document.body.innerHTML += `O seu nome tem ${nome.length} letras <br/>`
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`
document.body.innerHTML += `O primeiro indice da letra a no seu nome é: ${nome.indexOf('a')} <br />`
document.body.innerHTML += `O ultimo indice da letra a no seu nome é: ${nome.lastIndexOf('a')} <br />`
document.body.innerHTML += `As três ultimas letra do seu nome é: ${nome.slice(-3)} <br />`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`
