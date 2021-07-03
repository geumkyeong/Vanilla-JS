const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LIST = 'toDos';

const toDos = [];

// localStorage에 toDos 배열을 저장
function saveTodos() {
    // object -> string
    localStorage.setItem(TODOS_LIST, JSON.stringify(toDos));
}

function paintToDo(text) {
    // 화면에 Element 생성
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;

    deleteBtn.innerText = '❌'; 
    span.innerText = text; 
    li.id = newId; // id

    li.appendChild(deleteBtn); // 삭제하는 버튼
    li.appendChild(span); // todo
    toDoList.appendChild(li);

    
    const toDoObj = {
        text: text, // 입력창에 작성한 내용
        id: newId // id
    };
    // toDos: 객체 배열
    toDos.push(toDoObj);
    // localStorage에 저장
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    // 입력창에 작성한 내용
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

// localStorage에 저장된 toDos 배열을 화면에 띄우기
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LIST);
    if(loadedToDos !== null) {
        // string -> object
        const parsedToDos = JSON.parse(loadedToDos);
        // forEach: array, string, object의 요소 하나하나에 method를 적용시킴
        parsedToDos.forEach(function(toDo){
            // object의 text를 가져옴
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    // submit event
    toDoForm.addEventListener('submit', handleSubmit);
}

init();