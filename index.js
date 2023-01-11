window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("top-nav").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  }
  else if(document.body.scrollTop < 9 || document.documentElement.scrollTop < 9){
    document.getElementById("top-nav").style.backgroundColor = "#0A2647";
  }
}

