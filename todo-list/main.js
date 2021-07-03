const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LIST = 'toDos';

let toDos = [];

function deleteToDos(event) {
    const btn = event.target;
    // 부모노드인 li 찾기
    const li = btn.parentNode;
    //  toDoList에서 li 삭제하기
    toDoList.removeChild(li);

    // localStorge에서 toDo 삭제하기
    // filter: Array에서 조건이 맞는 요소들만 return. return된 요소들로 새로운 배열을 만듬.
    const cleanToDos = toDos.filter(function(toDo) {
        // 로컬에 저장된 toDo의 id들과 선택된 li요소의 id 비교
        // 선택된 id와 같은 요소를 제외하고 배열을 만듬.
        return toDo.id !== Number(li.id);
    });
    // toDos 배열을 새로운 배열로 교체 
    toDos = cleanToDos;
    // localStorage에 toDos 배열 저장
    saveToDos();
}

// localStorage에 toDos 배열 저장
function saveToDos() {
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
    li.appendChild(span); // 입력창에 작성한 내용
    toDoList.appendChild(li);

    const toDoObj = {
        text: text, // 입력창에 작성한 내용
        id: newId // id
    };
    // toDos: 객체 배열
    toDos.push(toDoObj);
    // localStorage에 toDos 배열 저장 
    saveToDos();

    deleteBtn.addEventListener('click', deleteToDos);
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