const animais = document.getElementById('animais');
console.log(animais.innerText);



const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1])

const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno.href);

const animaisImg = document.querySelector('animais img');
console.log(animaisImg[1]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
})




