function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(8));

function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total);

function imc(peso, altura, sexo) {
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(95, 1.8));

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Você gosta do céu';
  } else if (cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor preencha um número'
  } if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(60))

var totalPaises = 193;

function faltaVisitar(paisesVisitados) {

  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

var profissao = 'Analista de Sistemas';

function dados() {
  var nome = 'Thaís Quirino';
  var idade = 29;
  function outrosDados() {
    var endereco = 'Rio de janeiro';
    var idade = 28;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
