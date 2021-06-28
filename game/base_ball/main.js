var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = [];
var fail = 0;

for(var i = 0; i < 4; i++) {
    // Array로 return 되므로 [0]번째 인덱스 선택
    // 0~8번 범위에서 뽑을 때마다 범위가 줄어들게 처리
    var set = data.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    result.push(set);
}

var body = document.body;
var h1 = document.createElement('h1');
body.append(h1);

var form = document.createElement('form');
body.append(form);

var input = document.createElement('input');
form.append(input);

var button = document.createElement('button');
form.append(button);

form.addEventListener('submit', function(e) {
    e.preventDefalt();
    var answer = input.value;
    //답을 맞추면
    if(answer === result)){
       

    } else { //틀리면

    }
});