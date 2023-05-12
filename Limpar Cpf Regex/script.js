const cpfsList = document.querySelectorAll('.cpf li');

 const elementsInnerText=([...elements])  =>{
    return elements.map(element => element.innerText); 
    
    }
     const limparCPF = (cpf) => {
        return cpf.replace(/\D/g,)
     }
     const construirCPF =(cpf) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})/g,'$1.$2.$3-$4');
     }
     
     const formatarCPFS = (cpfs) => {
        return cpfs.map(limparCPF).map(construirCPF);
     }

     const substituiCPFS =(cpfsElements) =>{
        const cpfs = elementsInnerText (cpfsElements);
        const cpfsFormatados = formatarCPFS (cpfs);

         cpfsElements.forEach((element,index) => {
            element.innerText = cpfsFormatados [index];
            
         })
     }

//      console.log(limparCPF('121.121.222.88'));
//      console.log(construirCPF('12112122288'));

// const resultado = elementsInnerText(cpfs);
// console.log(formatarCPFS(resultado))
substituiCPFS(cpfsList);