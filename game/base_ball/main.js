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
button.textContent = '입력';
form.append(button);

console.log(result);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var answer = input.value; //string type
    console.log(input.value);
    
    if(answer === result.join('')){ //홈런
        h1.textContent = '홈런!';
        input.value = '';
        input.focus();
        //새로운 수 뽑기
        data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        result = [];
        for(var i = 0; i < 4; i++) {
            var set = data.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            result.push(set);
        }
    } else { //틀리면
        var array = answer.split('');
        var strike = 0;
        var ball = 0;

        for(var i = 0; i < 4;  i++){
            console.log(result[i], array[i]); //array[i]: string type
            if(Number(array[i]) === result[i]){
                strike++;
                //indexOf(n): n의 인덱스를 return함
            } else if(result.indexOf(Number(array[i])) > -1) {
                ball++;
            }
        }

        h1.textContent = strike+' 스트라이크 '+ball+' 볼 입니다!';
        input.value = '';
        input.focus();
    }
});

