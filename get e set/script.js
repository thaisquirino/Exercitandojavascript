const button ={
    get tamanho(){
        return this._numero;
    },
    set tamanho (numero) {
        this._numero = numero ;
    }
}

const frutas = {
    lista: [],
    set nova (fruta){
      this.lista.push(fruta);
    }
}

frutas.nova = 'Banana';
frutas.nova = 'Morango';


class Button{
    constructor (text,color){
        this.text = text;
        this.color = color;
    }
    get element(){
       const buttonElement = document.createElement('button');
       buttonElement.innerText = this.text;
       buttonElement.style.color = this.color;
       return buttonElement;
    }
}

