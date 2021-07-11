const toDoForm = document.querySelector('.toDoForm');
const toDoInput = toDoForm.querySelector('input');
const firstList = document.querySelector('.lists > .list:first-child');

const TODOS_LIST = 'toDos';

let toDos = [];

function deleteToDo(e) {
   const btn = e.target;
   const li = btn.parentNode;
   const ul = li.parentNode;

   ul.removeChild(li);
    // cleanToDos <-> toDos 비교 후 대체
   const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== Number(li.id);
   });

   toDos = cleanToDos;
   saveToDos();
}

function saveToDos() {
    // object to string
    localStorage.setItem(TODOS_LIST, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;

    span.textContent = text;
    deleteBtn.textContent = '❌';
    li.id = newId;

    li.classList.add('list-item');
    li.setAttribute('draggable', 'true');
    li.appendChild(deleteBtn);
    li.appendChild(span);
    firstList.appendChild(li);
    // 객체 배열 만든 뒤, localStorage에 저장
    const toDoObj = {
        id: newId,
        text: text
    };

    toDos.push(toDoObj);
    saveToDos();
    // toDo item 삭제
    deleteBtn.addEventListener('click', deleteToDo);
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
        // string to object
        const parsedToDos = JSON.parse(loadedToDos);
        // 각 item을 순서대로 불러옴
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();

