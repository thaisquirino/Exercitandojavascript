// Crie uma função para verificar se um valor  é Trutry  para que um valor seja  Truthy é um valor que sae traduz em verdadeiro
//quando avaliado em um cocntexto Booleano. Todos os valores são truthy  a menos que eles sejam definidos como falsy (ou seja, xetop
//para false , o "" , null ,undefined, e NaN)

function isTruthy(dado) {
  return !!dado;
}
// Crie uma função matemática que retorne o perimetro de um quadrado
// lembrando :perimetro é a soma dos quadro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
// Crie uma função q ue retorne seu nome completo 
// ela deve possuir os parêametros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return nome + '' + sobrenome;
  //return `${nome} ${sobrenome}`; pode ser assim tb
}

// Crie uma função s e verifica se um número é par
function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}
// Crie uma função que retorna o tipo de 
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do  JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function () {
  console.log('Thaís Quirino')
});





// Corrija o  erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {

  return 'Ainda faltam ${totalPaises - paisesVisitados} paises para visitar';
}
function jaVisitei(paisesVisitados) {
  return `ja visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}
precisoVisitar(20);



