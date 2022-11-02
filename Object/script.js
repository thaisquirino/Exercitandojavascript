// const pessoa = new Object({
// nome:'Thaís'
// })
// console.log(pessoa)

// const carro={
//   rodas:4,
//   init(valor){
//     this.marca = valor;
//     return this;
//   },
//   acelerar(){
//     return this.marca + 'acelerou';
//   },
//   buzinar(){
//     return this.marca + 'buzinou';
//   }
// } 

// const honda = Object.create(carro) .init('Honda');

// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');

// console.log(ferrari.acelerar());

// const funcaoAutomovel ={
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar(){
//     return 'buzinou';
//   },
// }

// const moto ={
//   rodas:2,
//   capacete:true,
// }
// Object.assign(moto,funcaoAutomovel);

// console.log(moto)

// const moto ={}

// console.log(moto)

// Object.defineProperties(moto,{
//   rodas:{
//     value:2,
//     configurable:false,

//   }


// })

//  const moto ={
//   capacete:true,
//  }

// Object.defineProperties(moto,{
//   rodas:{
//     enumerable:true,
//     get() {
//       return this._rodas;
//     },
//     set(valor){
//       this.rodas = valor * 4 + 'Total Rodas'
//     }
//     }
// })
//  console.log (moto)

//  const innerHeightConfig = Object.getOwnPropertyDescriptor(window,'innerHeight');

const frutas =['Banana','Uva'];
const  frase = 'Oi Frase';
const somar = function(a,b){
  return a + b;
};
 const carro ={
  marca:'Ford'
 }


console.log(frase.toString ());

Object.prototype.toString.call(frutas)


