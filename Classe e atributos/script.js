const menu =document.querySelector('.menu');

menu.classList.add('ativo','teste');
menu.classList.remove('azul');

if(menu.classList.contains('azul')){
    menu.classList.add('possui-azul');
}else{
    menu.classList.add('nao-possui-azul') ;
}
//console.log(menu);

const animais = document.querySelector('.animais');

console.log(animais.attributes[1]);

const img =document.querySelector('img');
const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');

const possuiAlt =img.hasAttribute('title');

console.log(possuiAlt);

