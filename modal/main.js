const openBtn = document.querySelector('#open');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal__overlay');
const closeBtn = document.querySelector('#close');

const openModal = () => {
    modal.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);