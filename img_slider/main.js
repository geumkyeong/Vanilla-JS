const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const item = document.querySelectorAll('.item');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

let index = 0;
let lastIndex = slides.length-1; // 2
const slideWidth = slides[0].clientWidth; // *Slider Size(579px)

nextBtn.addEventListener('click', () => {
    slidesContainer.style.transition = "all 0.3s ease-in-out"; // 슬라이딩 애니메이션

    index++;
    slidesContainer.style.transform = `translateX(${ -slideWidth * index }px)`;
    // 마지막 Slide 일 때,
    if(index > lastIndex){
        setTimeout(() => {
            slidesContainer.style.transform = `translateX(${ 0 }px)`;
            index = 0;
        }, 200); // 다음 위치로 이동하다가 첫 Slide로 가기 
    }
    console.log('Current Direction: ', slidesContainer.style.transform);
});

prevBtn.addEventListener('click', () => {
    slidesContainer.style.transition = "all 0.3s ease-in-out"; // 슬라이딩 애니메이션

    index--;
    slidesContainer.style.transform = `translateX(${ -slideWidth * index }px)`;
    // 첫 Slide 일 때,
    if(index < 0){
        setTimeout(() => {
            slidesContainer.style.transform = `translateX(${ -1158 }px)`;
            index = lastIndex;
        }, 200); // 이전 위치로 이동하다가 마지막 Slide로 가기 
    }
    console.log('Current Direction: ', slidesContainer.style.transform);
});