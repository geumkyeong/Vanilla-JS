const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LIST = 'toDos';

const toDos = [];

function paintTodo(text) {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;

    li.id = newId; // id
    deleteBtn.innerText = '❌'; 
    span.innerText = text; 

    li.appendChild(deleteBtn); // 삭제하는 버튼
    li.appendChild(span); // todo 내용
    toDoList.appendChild(li);

    
    const toDoObj = {
        text: text, // 입력창에 작성한 내용
        id: newId // id
    };

    toDos.push(toDoObj);
}

function handleSubmit(event) {
    event.preventDefault();
    // 입력창에 작성한 내용
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = '';
}

// todo list 화면에 띄우기
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LIST);
    if(loadedToDos !== null) {

    }
}

function init() {
    loadToDos();
    // submit event
    toDoForm.addEventListener('submit', handleSubmit);
}

init();