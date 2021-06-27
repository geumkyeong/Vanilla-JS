// 질문
var  word = document.createElement('div');
word.textContent = '책상';
document.body.append(word); 
//폼
var form = document.createElement('form');
document.body.append(form);
//입력폼
var input = document.createElement('input');
form.append(input);
//버튼
var button = document.createElement('button');
button.textContent = '등록';
form.append(button);
// 결과
var result = document.createElement('div');
document.body.append(result);

//word: word.textContent
//answer: input.value
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    // 제시어 끝과 대답의 첫글자가 같을 때
    if(word.textContent[word.textContent.length-1] === input.value[0]) {
        result.textContent = '정답입니다!';
        word.textContent = input.value; //대답 -> 제시어로 대체
        input.value = '';
        input.focus();
    } else {
        result.textContent = '틀렸습니다! 다시 맞춰주세요';
        input.value = '';
        input.focus();
    }
})
