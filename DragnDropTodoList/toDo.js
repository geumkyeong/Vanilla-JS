//modal
const openBtn = document.querySelector('#addBtn');
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
// confirmBtn.addEventListener('click', handleSubmit);

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/* Drag Event */
const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null; // 전역변수

list_items.forEach(function (item) {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

function dragStart () { // 1: 드래그 시작
    draggedItem = this; // 현재 선택된 toDo item
    setTimeout(function () {
        draggedItem.style.display = 'none';
    }, 0);
    console.log('dragstart')
}

function dragEnd () { // 6: 드래그 끝남
    setTimeout(function () {
        draggedItem.style.display = 'block';
        draggedItem = null;
    }, 0);
    console.log('dragend')
    // 드래그된 list 위치를 toDo에 할당(toDos 업데이트됨)
    updateToDos(this);
    // toDos를 localStorage에 저장
    saveToDos();
}

lists.forEach(function (list){
    list.addEventListener('dragleave', dragLeave);
    list.addEventListener('dragenter', dragEnter);
    list.addEventListener('dragover', dragOver);
    list.addEventListener('drop', dragDrop);
});

function dragLeave () { // 2: 포인터 벗어남
     this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
}

function dragEnter () { // 3: 포인터 진입
    this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
}

function dragOver (e) { // 4: 포인터 유지
    e.preventDefault();
}

function dragDrop () { // 5: 드래그 놓음
    this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    this.append(draggedItem); // 전역변수에 저장된 item을 가져옴
    console.log('dropped')
}

// Todo-List
const toDoForm = document.querySelector('.toDoForm');
const toDoInput = toDoForm.querySelector('#todo_input');
const submitBtn = document.querySelector('#todo_submit');
const firstList = document.querySelector('.lists > .list:first-child');

const TODOS_LIST = 'toDos';

let toDos = []; // toDo Object들이 저장된 배열
let toDoObj = {}; // 객체배열 toDos의 요소

function deleteToDo(e) {
   const btn = e.target;
   const item = btn.parentNode;
   const list = item.parentNode;

   list.removeChild(item);
    // cleanToDos <-> toDos 비교 후 대체
   const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== Number(item.id);
   });

   toDos = cleanToDos;
   saveToDos();
}

function saveToDos() {
    // object to string
    localStorage.setItem(TODOS_LIST, JSON.stringify(toDos));
}

function paintToDo(text, parentId) {
    const toDo = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;

    span.textContent = text;
    deleteBtn.textContent = '❌';
    toDo.id = newId;

    toDo.classList.add('list-item');
    toDo.setAttribute('draggable', 'true');
    toDo.appendChild(deleteBtn);
    toDo.appendChild(span);

    if(parentId === null) { // 새로운 toDo 생성
        firstList.appendChild(toDo); // 첫 번째 list에 toDo 추가
        
        toDoObj = {
            id: newId,
            parentId: null,
            text: text
        };
    } else { // list의 위치가 수정된 toDo 생성
        lists[parentId-1].appendChild(toDo); // n 번째 list에 toDo 추가

        toDoObj = {
            id: newId,
            parentId: parentId,
            text: text
        };
    }
    // toDoObject 저장
    toDos.push(toDoObj);
    // toDos를 localStorage에 저장
    saveToDos();

    toDo.addEventListener('dragstart', dragStart);
    toDo.addEventListener('dragend', dragEnd);
    // toDo item 삭제
    deleteBtn.addEventListener('click', deleteToDo);
}

function handleSubmit(e) {
    e.preventDefault();
    // 입력창에 입력한 내용 넘기기
    if(toDoInput.value !== ''){
        const currentValue = toDoInput.value;
        paintToDo(currentValue, null);
        toDoInput.value = '';
        toDoInput.focus();
    }
}

// localStorage에 저장된 toDos 배열을 화면에 띄우기
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LIST);
    if(loadedToDos !== null) {
        // string to object
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            // toDo의 내용과, 수정된 list id를 전달
            paintToDo(toDo.text, toDo.parentId);
        });
    }
}

function updateToDos(toDo) {
    toDos.forEach(e=>{
        if(e.id == toDo.id){
            // toDo에 업데이트된 list id 할당
            e.parentId = toDo.parentNode.id;
        }
    });
}
        

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
    toDoForm.addEventListener('submit', closeModal);
}

init();