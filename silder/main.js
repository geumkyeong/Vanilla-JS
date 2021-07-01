const SHOWING_CLASS = 'showing';
const firstSlide = document.querySelector('.slider__item:first-child'); //첫번째 슬라이드

function slide() {
    // showing이 적용된 슬라이드
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

    if(currentSlide) {
        // 현재 슬라이드에서 다음 슬라이드로 넘어가기
    } else {
        // 첫번째 슬라이드를 보여주기
        firstSlide.classList.add(SHOWING_CLASS);
    }
}

slide();
