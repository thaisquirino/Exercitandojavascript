// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector ('.animais-descricao');
// h1.innerHTML;
//  console.log(animaisLista.innerHTML);
//  console.log(h1.outerHTML)

//  h1.outerHTML='<p> Novo Titulo</p>'
//  //console.log(animaisLista.innerHTML)

// const lista = document.querySelector('.animais-lista');

// console.log(lista.previousSibling);

// const animais = document .querySelector('.animais');
// const contato =document.querySelector('.contato');
// const titulo = document.querySelector('.titulo');

// contato. insertBefore(animais, titulo);

//  const mapa = document.querySelector('.mapa');
//  contato. replaceChild(lista,titulo);


//  const novoh1 = document.createElement('h1');
//  novoh1.innerText ='Novo Titulo'; 
//  novoh1.classList.add('titulo');

//  console.log(novoh1);

// const h1 = document.querySelector('h1');
// const faq = document.querySelector('.faq');

// const cloneH1= h1.cloneNode('azul');
// faq.appendChild(cloneH1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');
faq.appendChild(cloneH1);
