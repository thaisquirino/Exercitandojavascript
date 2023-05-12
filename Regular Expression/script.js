// const frase = 'JavaScript';
// const fraseNova = frase.replace(/a/, 'THAIS');

//  console.log(fraseNova);

// const regexp= /\w+/gi;

// const regexp1 = new RegExp ('\\d+','gi');
// console.log(frase.replace(regexp1,'X'))

// const regexp = /Java/g;


// const frase = 'JavaScript Linguagem 101';
// console.log(regexp.test(frase));

const  frase = 'JavaScript, TypeScript, CoffeeScript , Java';
const regexp= /\w+/gi;

let regexpResult;
while((regexpResult = regexp.exec(frase))!== null) {
    console.log(regexpResult [0])
}

