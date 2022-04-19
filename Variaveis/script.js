var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log('É Verdadeiro');
} else if (possuiDoutorado) {
  console.log('Possui Doutorado');
} else {
  console.log('Não possui nda')
}

var nome = 'Thaís Quirino';
if (nome) {
  console.log(nome);
} else {
  console.log('Nome não existe');
}

var corFavorita = 'Amarelo';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o Céu');
    break;
  case 'Amarelo':
    console.log('Olhe para o Sol');
    break;
  case 'Verde':
    console.log('Olhe para Arvores');
    break;
  default:
    console.log('Feche os olhos.')
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual
var minhaIdade = 3;
var idadePrimo = 10;

if (minhaIdade > idadePrimo) {
  console.log('É maior')
} else if (minhaIdade === idadePrimo) {
  console.log('É igual')
} else {
  console.log('É menor');
}




// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - '  ') && (5 - 2);
//Quando  tem  && ele sempre vai retornar  o ultimo valor verdadeiro 
//ou o primeiro  valor falsao que ele achar .
console.log(expressao);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes')
} else {
  console.log('Brasil tem mais habitantes')
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

