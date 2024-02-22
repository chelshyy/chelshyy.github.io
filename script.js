const header = document.querySelector("header");

// window,addEventListener("scroll", function(){
//     header.classList.toggle("sticky", window.scrollY > 120);
// });

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

// sr.reveal('.logo',{delay:100, origin: 'left'});
// sr.reveal('.navbar',{delay:300, origin: 'top'});
// sr.reveal('.menu-btn',{delay:420, origin: 'right'});

sr.reveal('.home-text span',{delay:500, origin: 'top'});
sr.reveal('.home-text h1',{delay:580, origin: 'left'});
sr.reveal('.home-text p',{delay:650, origin: 'right'});
sr.reveal('.main-btn',{delay:760, origin: 'left'});

sr.reveal('.share p',{delay:850, origin: 'left'});
sr.reveal('.social',{delay:850, origin: 'bottom'});

sr.reveal('.home-img',{delay:900, origin: 'right'});