function f() {
    let menuIcon = document.getElementsByClassName("nav__main-hamburger");
let linkMenu = document.getElementsByClassName("nav__secondary");
let closeButton = document.getElementsByClassName("nav__secondary-close");
let container = document.querySelector(".slider");
let slides = document.getElementsByClassName("slider__slide");
let rightArrow = document.querySelectorAll(".arrows__right");
let leftArrow = document.querySelectorAll(".arrows__left");
let current = 0;

menuIcon[0].addEventListener("click", () => {
    linkMenu[0].classList.add("nav__secondary--active");
})

closeButton[0].addEventListener("click", () => {
    linkMenu[0].classList.remove("nav__secondary--active");
})

slides[current].classList.add("slider__slide--active");

rightArrow.forEach(e => e.addEventListener("click", () => {
    nextSlide(current + 1);
    
}));

leftArrow.forEach(e => e.addEventListener("click", () => {
    nextSlide(current - 1);
}));

function nextSlide(index) {
    if(index >= slides.length) {
        index = 0;
    }
    
    if(index < 0) {
        index = slides.length - 1;
    }
    
        slides[current].classList.remove("slider__slide--active");
        slides[index].classList.add("slider__slide--active");
        current = index;
    
    
}

   
    



    
}

f();

