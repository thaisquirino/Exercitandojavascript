function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return 'Abraçou'
  }
  this.andar = function() {
    return 'Andou pelo objeto'
  }
}
  var obj = {
    nome:'Thais',
    idade:28,
  }

  Pessoa.prototype.andar = function(){
    return this.nome + 'Pessoa andou';
  }

  Pessoa.prototype.nadar = function(){
    return this.nome + 'Pessoa nadou';
  }

 const andre = new Pessoa ('Andre',28);
//  console.log (Pessoa.prototype)
//  console.log(andre.prototype)
 const país= 'Brasil'

 // Transforma em uma array 
 const listaArray1 = Array.prototype.slice.call(lista);
 const listaArray2 = Array.from(lista);

 const Carro = {
  marca : 'Ford',
  preco: 2000,
  andar() {
    return 'Oi';
  }
 }