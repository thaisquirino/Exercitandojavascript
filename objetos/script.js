//Transforme o objeto abaixo em uma Constructor Function
function Carro () {
    this.marca='Marca';
    this.preco = 2000;
   }
   const honda = new Carro();

 function Pessoa (nome,idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        console.log(this.nome + 'Andou')
    }
 }

   
   //Crie 3 pessoas, Thaís -28 anos,
   //Maria -60 ,Fernando - 34anos,

    const Thais = new Pessoa ('Thais',28);
    const Maria = new Pessoa ('Maria',60);
    const Fernando = new Pessoa ('Fernando',34);
   
   //Crie uma Constructor Function (Dom) para manipulação
   //de listas de elementos do  dom. Deve conter as seguintes
   // propriedades e métodos:
   //
   // elements, retorna NodeList com os elementos selecionados
   // addClass(classe), adiciona a classe a todos os elementos
   // removeClass(classe), remove a classe a todos os elementos

   function Dom (seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements=elementList;
    this.addClass = function (classe) {
     elementList.forEach((element) =>{
      element.classList.add(classe);
     })
    }
    this.removeClass = function (classe) {
        elementList.forEach((element) =>{
         element.classList.remove(classe);
        })
      }
   }
   const listaItems = new Dom ('li'); 
   const ul = new Dom ('ul');

//    listaItens.addClass('ativar');
//    ul.addClass('ativar-ul')