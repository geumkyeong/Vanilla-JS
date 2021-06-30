const toggleBtn = document.querySelector('.navbar__toggleBtn');

const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

/* toggle button 클릭할 때마다 
네비게이션 메뉴, 아이콘이 나타나고 사라지게 */
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});