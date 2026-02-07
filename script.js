let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}




var swiper = new Swiper(".team-slider", {
    loop: true, // Keeps looping through slides
    grabCursor: true, // Enables grab cursor for better UX
    spaceBetween: 20, // Space between slides
    slidesPerView: 1, // Show one image per slide
    allowSlideNext: true, // Allow navigation to next slide
    allowSlidePrev: true, // Allow navigation to previous slide
    initialSlide: 0, // Start from the first slide
    breakpoints: {
        0: {
            slidesPerView: 1, // 1 image per slide for all screen sizes
        },
    },
});
