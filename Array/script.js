const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor =comidas.shift();
const ultimoValor = comidas.pop();


comidas.push('Arroz');
comidas.unshift('Peixe','Batata');

console.log (primeiroValor)
console.log (ultimoValor)
console.log(comidas)



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// // Inverta a ordem dos estudantes
// // Verifique se Joana faz parte dos estudantes
// // Verifique se Juliana faz parte dos estudantes

// estudantes.sort();
// estudantes.reverse();


// console.log(estudantes);
// console.log(estudantes.includes('Joana'));
// console.log(estudantes.includes('Juliana'));







// let html = `<section>
//               <div>Sobre</div>
//               <div>Produtos</div>
//               <div>Contato</div>
//             </section>`
// // Substitua section por ul e div com li,
// // utilizando split e join
// html=html.split('section').join('ul').split('div').join('li');
// console.log(html)



// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// // Remova o último carro, mas antes de remover
// // salve a array original em outra variável
// const carrosCopia = carros.slice();


// carros.pop();

// console.log(carros);
// console.log(carrosCopia);


// const frutas = ['Banana', 'Pêra', 'Uva'];

// const temUva = frutas.some ((item)=>{
// return item === 'Uva';
// })
// // console.log(temUva);

// const numeros =[6,43,22,88,101,29];

// const maiorQue3 = numeros.every(n => n > 9);

// console.log(maiorQue3)



// const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
// const buscaUva = frutas.findIndex((fruta) => {
//   return fruta === 'Uva'; 
// }); // 2

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.find(x => x > 45); // 88


// const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
// const arrayLimpa = frutas.filter((fruta) => {
//   return fruta; 
// }); // ['Banana', 'Uva', 'Maçã']

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]


const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const maiores15 =aulas.filter((aula) =>{
  return aula.min > 15;
})
console.log(maiores15)