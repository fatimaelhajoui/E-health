function showNav(){
    document.getElementsByClassName("navgation")[0].classList.toggle("active");
}
const navEl= document.querySelector('.navbar');

window.addEventListener('scroll',() =>{
    if(window.scrollY > 70){
        navEl.classList.add('navbar-scrolled');
    }
    else if(window.scrollY <= 70){
        navEl.classList.remove('navbar-scrolled');
    }
});

(function () {
    var words = ["quality","calibre","scale"],
    i = 0;
    setInterval(function(){ $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 3000)
  })();



