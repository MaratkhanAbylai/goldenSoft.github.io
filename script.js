let indicators = document.querySelectorAll('.indicator');
let sliderImgs = document.querySelectorAll('.slider .container img');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');

let indicatorIndex = 1;

indicators[1].classList = 'active-indicator';

prevBtn.addEventListener('click', () => {
    if(indicatorIndex === 0) {
        indicatorIndex = 2;
    } else {
        indicatorIndex--;
    }
    indicators.forEach(indicator => {
        indicator.classList = 'indicator';
    });
    indicators[indicatorIndex].classList = 'active-indicator';
});

nextBtn.addEventListener('click', () => {
    if(indicatorIndex === 2) {
        indicatorIndex = 0;
    } else {
        indicatorIndex++;
    }
    indicators.forEach(indicator => {
        indicator.classList = 'indicator';
    });
    indicators[indicatorIndex].classList = 'active-indicator';
});