var numero = 20;

numero += 10 // numero
console.log(numero);

var idade = 20;
var naoPossuiDiabetes = false;

var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)


var possuiFaculdade = false;
if (possuiFaculdade)
  console.log('sim possui');
else
  console.log('Não possui')


//some  500 ao valor de scrool abaixo,
// atribuindo o novo valor a scroll
var scrool = 1000;
scroll += 500;
console.log(scroll);


// Atribua true para a variável darCredito,
// caso o clintew possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
console.log(darCredito) ? 'Dar crédito ao cliente' : 'Negar crédito';
console.log(darCredito)

'use strict'
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}
mostrarCarro(); // fusca no console
console.log(carro); // Erro , carro is not defined



{
  var carro2 = 'Fusca 2';
  var ano = 2018;
}
console.log(carro2);
console.log(ano);


var i = 50;
for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i * 10)




