// Crie um  array  com os anos que o  Brasil ganhou  a copa
// 1959 ,1962,1970,1994,2002

var brasilCampeao = [1959, 1962, 1970, 1994, 2002]
console.log(brasilCampeao)

// interaja  com o  array utilizando um loop , para  mostrar
// no console a seguinte mensagem ,'O  Brasil  ganhou a copa de ${ano}'

for (var i = 0; i < brasilCampeao.length; i++) {
  console.log(`O Brasil ganhou  a copa de ${brasilCampeao[i]}`);
}

// intereja com o  um loop nas frutas abaixo  e pare ao chegar 
// em pera 
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[frutas]);
  if (frutas[fruta] === 'Pera') {
    break;
  }
}

//Coloque  a última fruta do array acima de uma variável,
// sem remover a mesmas do  array 
var ultimaFruta = frutas[frutas.length - 1];

