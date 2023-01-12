function Menu(e) {
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close",list.classList.add('opacity-100')) 
    : (e.name = "menu", list.classList.remove('opacity-100'))
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
    let home = document.getElementById('home-btn');
    let about = document.getElementById('about-btn');
    let contact = document.getElementById('contact-btn');
    
  if (document.documentElement.scrollTop > 1 && document.documentElement.scrollTop <= 500 ) {
    home.classList.add('bg-secondary-color');
  }
  else if(document.documentElement.scrollTop > 500){
    home.classList.remove('bg-secondary-color');
  }

  if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop <= 1100 ) {
    about.classList.add('bg-secondary-color');
  }
  else if(document.documentElement.scrollTop > 1100 || document.documentElement.scrollTop < 500){
    about.classList.remove('bg-secondary-color');
  }

  if (document.documentElement.scrollTop > 1100) {
    contact.classList.add('bg-secondary-color');
  }
  else if(document.documentElement.scrollTop < 1100){
    contact.classList.remove('bg-secondary-color');
  }




}
