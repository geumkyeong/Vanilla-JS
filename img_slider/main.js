const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const items = document.querySelectorAll('.item');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

let index = 0;
let lastIndex = slides.length-1; // 2
const slideWidth = slides[0].clientWidth; // *Slider 크기(579px)

nextBtn.addEventListener('click', () => {
    items.forEach((item) => { item.classList.remove('active'); }); // 활성화된 Active Style 초기화
    slidesContainer.style.transition = "all 0.3s ease-in-out"; // 슬라이딩 애니메이션
    // 다음 위치로
    index++;
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

    // 마지막 슬라이드에서 넘어갈 때,
    if(index > lastIndex){
        setTimeout(() => {
            // 첫 슬라이드 위치로 가기 
            index = 0; 
            slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`; // 0px
            items[index].classList.add('active');
            // console.log('Current Direction: ', slidesContainer.style.transform);
        }, 200);
    } else {
        items[index].classList.add('active'); // 현재 아이템 Active 하기
        // console.log('Current Direction: ', slidesContainer.style.transform);
    }
});

prevBtn.addEventListener('click', () => {
    items.forEach((item) => { item.classList.remove('active'); }); // 활성화된 Active Style 초기화
    slidesContainer.style.transition = "all 0.3s ease-in-out"; // 슬라이딩 애니메이션
    // 이전 위치로
    index--;
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
    // 첫 슬라이드에서 넘어갈 때,
    if(index < 0){
        setTimeout(() => {
            // 마지막 슬라이드 위치로 가기
            index = lastIndex; 
            slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`; // -1158px
            items[index].classList.add('active');
            // console.log('Current Direction: ', slidesContainer.style.transform);
        }, 200); 
    } else {
        items[index].classList.add('active'); // 현재 아이템 Active 하기
        // console.log('Current Direction: ', slidesContainer.style.transform);
    }
});