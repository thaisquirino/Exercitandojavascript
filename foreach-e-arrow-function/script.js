// Retorne no console todas as imagens do  site
const img = document.querySelectorAll('img');
console.log(img);

//Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

//Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);
//Selecioneo primeiro h2 dentro de .animis-descricao
 const h2animais = document.querySelector('.animais-descricao h2');
 console.log(h2animais);
//SeLecione o último p do site
const paragrafos =document.querySelectorAll('p');

console.log(paragrafos[--paragrafos.length]);
