// const Dom = {
//  seletor:'li',
//  element(){
//     return elementoSelecionado = document.querySelector (this.seletor);
//  },
//  ativar(){
//     const elementoSelecionado = this.element();
//     elementoSelecionado.classList.add('ativar');
//  }
// }


function Dom( seletor) {
     this.element =function() {
        return document.querySelector(this.seletor);
    }
   this.ativar=function(){
        this.element().classList.add('ativar');
    }
}

const li = new Dom ('li');
const ul = new Dom ('ul');

const lastLi =new Dom ('li:last-child');
lastLi.ativar();