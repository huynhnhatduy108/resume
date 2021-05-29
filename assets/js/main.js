// menu show
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// show
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// hidden
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// Remove menu 
const navLink =document.querySelectorAll(".nav_link");

function linkAction(){
    navMenu.classList.remove("show");
}
navLink.forEach(link=>link.addEventListener("click", linkAction));

// Scroll section
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll',scrollActive)

function scrollActive(){
  const scrollY =window.pageYOffset;

  sections.forEach(curren=>{
    const sectionHeight = curren.offsetHeight;
    const sectionTop = curren.offsetTop -50;
    sectionId = curren.getAttribute('id');

    if(scrollY>sectionTop&&scrollY<= sectionTop+sectionHeight){
        document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add("active")
    }
    else{
        document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove("active")
    }
  });
}