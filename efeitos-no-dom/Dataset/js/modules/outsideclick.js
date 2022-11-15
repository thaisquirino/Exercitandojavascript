export  default function outsideClick(element,events,callback) {


    const html = document.documentElement;
    const outside ='data-outside';

  
    if(!element.hasAttribute(outside)){ 
      events.foreach(userEvent => {
      html.addEventListener('userEvent', handleOutsideClick);
      })
     element.setAtribute(outside, '');
    } 
    function handleOutsideClick (event) {
      if(!element.contains(event.target)) { 
        element.removeAttribute(outside);
        events.foreach(userEvent => {
          html.removeEventListener('userEvent', handleOutsideClick);
        })
      callback();
    }
  }
}