// darOi.call(null,'Thaís', 28);

// window.marca = 'Carro';
// window.ano =2025

// function descricaoCarro() {
//     console.log(this)
//     console.log(this.marca + '' + this.ano);
// }
// descricaoCarro.call({marca:'Ecosport', ano:2023});

//  const carros = ['Ford','Fiat','VW'];

//  carros.forEach((item) => {
//  console.log(item)
//  })

//  function Dom (seletor) {
//     this.element = document.querySelector(seletor);
//  }
// Dom.prototype.ativo = function(classe){
//     this.element.classList.add(classe)
// }

//  const ul = new Dom('ul');

//  const li ={
//     element:document.querySelector('li')
//  }

// ul.ativo.call(li,'ativo');

const frutas = ['Banana', 'Pêra', 'Uva'];
 Array.prototype.pop.call(frutas);
 frutas.pop ();

 const arrayLike ={
    0:'Item 1',
    1:'Item 2',
    2:' Item 3',
    length:3,
 }

 const li = document.querySelectorAll('li');

 const filtro = Array.prototype.filter.call(li,(item) => {
    return item.classList.contains('ativo');
 })

 console.log(filtro);

 console.log(li)