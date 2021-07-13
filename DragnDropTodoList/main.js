const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null; // 전역변수

for(let i = 0; i < list_items.length; i++){
    const item = list_items[i];
    
    item.addEventListener('dragstart', function () { // 1: 드래그 시작
        draggedItem = item; // 현재 선택된 item을 전역변수에 저장
        setTimeout(function () {
            draggedItem.style.display = 'none';
        }, 0);
    });

    item.addEventListener('dragend', function () { // 6: 드래그 끝남
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });
        
    for(let j = 0; j < lists.length; j++){
        const list = lists[j];
        
        list.addEventListener('dragleave', function () { // 2: 포인터 벗어남
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });

        list.addEventListener('dragenter', function (e) { // 3: 포인터 진입
            e.preventDefault();
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        });

        list.addEventListener('dragover', function (e) { // 4: 포인터 유지
            e.preventDefault();
        });
        
        list.addEventListener('drop', function () { // 5: 드래그 놓음
            list.append(draggedItem); // 전역변수에 저장된 item을 가져옴
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });
    }
}