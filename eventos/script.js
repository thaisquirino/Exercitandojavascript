const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno (event) {
    event.preventDefault();
    console.log('event');
}
linkExterno.addEventListener('click',handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event){
    console.log(event.type,event);
}

// h1.addEventListener('click',handleEvent);
// h1.addEventListener('mouseenter',handleEvent);
// h1.addEventListener('mousemove',handleEvent);

// window.addEventListener ('scroll',handleEvent);
// window.addEventListener('resize',handleEvent);
// window.addEventListener('keydown',handleEvent);

function handleKeyboard (event) {
    if(event.key === 'a'){
        document.body.classList.toggle('azul')
    }
}

window.addEventListener('keydown',handleKeyboard);
const imgs = document.querySelectorAll('img');

function handleImg(event){
    console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
    img.addEventListener('click',handleImg);
});

 
