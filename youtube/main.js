const title = document.querySelector('.info .metaData .title');
const moreBtn = document.querySelector('.info .metaData .moreBtn');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked'); 
    title.classList.toggle('clamp'); // 제목 숨기기 & 보이기
});
