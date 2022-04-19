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

var corFavorita = 'Rosa';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  default:
    console.log('Feche os olhos.')
}

