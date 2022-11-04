const btnUp = document.querySelector('.up-button');
const btnDown = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlideIndex = 0;

// Slider cards adjustment
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

// Buttons functionality
btnUp.addEventListener('click', () => {
    changeSlides('up');
});
btnUp.addEventListener('keyup', () => {
    changeSlides('up');
});

btnDown.addEventListener('click', () => {
    changeSlides('down');
});
btnUp.addEventListener('keydown', () => {
    changeSlides('down');
});


function changeSlides(direction) {
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if(direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
