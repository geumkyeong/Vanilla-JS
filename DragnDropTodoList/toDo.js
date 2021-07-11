const toDoForm = document.querySelector('.toDoForm');
const toDoInput = toDoForm.querySelector('input');
const firstList = document.querySelector('.lists > .list:first-child');

const TODOS_LIST = 'toDos';

function paintToDo(text) {
    console.log('input text: ', text)
    // <li class="list-item" draggable="true">List Item 1</li>
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const span = document.createElement('span');

    span.textContent = text;
    deleteBtn.textContent = '❌';

    li.classList.add('list-item');
    li.setAttribute('draggable', 'true');
    li.appendChild(deleteBtn);
    li.appendChild(span);
    firstList.appendChild(li);
}

function handleSubmit(e) {
    e.preventDefault();
    // 입력창에 입력한 내용 넘기기
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
    toDoInput.focus();
}

// localStorage에 저장된 toDos 배열을 화면에 띄우기
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LIST);
    if(loadedToDos !== null) {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();

