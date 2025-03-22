let index = 0;

function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    index += step;
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));
});