
function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
  
    if(tabMenu.length && tabContent.length) {
      tabContent[0].classList.add('ativo');
  
      function activeTab(index) {
        tabContent.forEach((section) => {
          section.classList.remove('ativo');
        });
        console.log(tabContent[index].dataset.anime);
        tabContent[index].classList.add('ativo');
      }
  
      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
          activeTab(index);
        });
      });
    }
  }
  initTabNav();
  
  function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"]dt');
    const activeClass = 'ativo';
    
    if(accordionList.length) {
      accordionList[0].classList.add(activeClass);
      accordionList[0].nextElementSibling.classList.add(activeClass);
  
      function activeAccordion() {
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
      }
  
      accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
      });
    }
  }
  initAccordion();
  
  
  function initScrollSuave() { 
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  
    function scrollToSection (event){
    event.preventDefault();
    const href =event.currentTarget.getAttribute('href');
    const section= document.querySelector(href);
  
      section.scrollIntoView ({
      behavior:'smooth',
      block:'start',
      });
  
  
    //Forma alternativa de  descer  suavemente por toda pagina 
    //  const  topo = section.offsetTop;
    //  window.scrollTo ({
    //   top:topo,
    //   behavior:'smooth',
    // });
    }
  
    linksInternos.forEach ((link) => {
    link.addEventListener('click',scrollToSection);
  
    });
  }
  initScrollSuave();
  
  function initAnimacaoScroll () {
  const sections =document.querySelectorAll('.js-scroll');
  if (sections.length){
  const windowMetade =window.innerHeight *0.6;
  
  function animaScrooll(){
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
       if(isSectionVisible) 
        section.classList.add('ativo');
        else
         section.classList.remove('ativo');
    })
  }
  animaScrooll ();
  
  window.addEventListener('scroll',animaScrooll);
  }
  }
  initAnimacaoScroll();
  