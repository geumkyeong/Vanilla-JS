const SHOWING_CLASS = 'showing';
const firstSlide = document.querySelector('.slider__item:first-child'); // 첫번째 슬라이드

function slide() {
    // showing이 적용된 슬라이드
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

    if(currentSlide) {
        // 현재 슬라이드에 .showing 없애기
        currentSlide.classList.remove(SHOWING_CLASS);

        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){ // 다음 슬라이드가 있을 때
            // 다음 슬라이드 보여주기
            nextSlide.classList.add(SHOWING_CLASS);
        } else { // 마지막 슬라이드 일 때
            // 첫번째 슬라이드 보여주기 
            firstSlide.classList.add(SHOWING_CLASS);
        }
    } else {
        // 첫번째 슬라이드 보여주기
        firstSlide.classList.add(SHOWING_CLASS);
    }
}

// 1.5초 마다 다음 슬라이드로 넘기기
window.setInterval(slide, 1500);
