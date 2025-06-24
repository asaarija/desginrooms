// hamburger
const hamburgerButton = document.querySelector('#hamburger-button');
const navMenu = document.querySelector('#nav-menu');

hamburgerButton.addEventListener('click', function() {
    navMenu.classList.toggle('hidden');
})


// img slider
var swiper = new Swiper(".swiper", {
    slidePerView: 1,
    spaceBetween: 10,
    speed: 400,
    preventClicks: true,
    noSwiping: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 30,

        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});