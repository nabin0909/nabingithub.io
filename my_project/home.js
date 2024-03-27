const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slider img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    slideIndex++;
}

setInterval(showSlides, 3000); // Change slide every 3 seconds
