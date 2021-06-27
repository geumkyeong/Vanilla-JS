    var a = Math.ceil(Math.random()*9);
    var b = Math.ceil(Math.random()*9);
    var answer = a*b; //정답

    var question = document.createElement('div');
    question.textContent = String(a)+' 곱하기 '+String(b)+' 는?';
    document.body.append(question);

    var form = document.createElement('form');
    document.body.append(form);
    
    var input = document.createElement('input');
    form.append(input);

    var button = document.createElement('button');
    button.textContent = '등록';
    form.append(button);

    var result = document.createElement('div');
    document.body.append(result);

    // number: input.value
    form.addEventListener('submit', function (e){
        e.preventDefault();
        console.log(answer, input.value);
            //정답과 비교
            if(answer === Number(input.value)) {
                // 전역변수 업데이트
                a = Math.ceil(Math.random()*9);
                b = Math.ceil(Math.random()*9);
                answer = a*b;
                question.textContent = String(a)+' 곱하기 '+ String(b)+' 는?';

                result.textContent = '딩동댕!';
                input.value = '';
                input.focus();
            } else {
                result.textContent = '땡! 다시 입력하세요';  
                input.value = '';
                input.focus();
            }
        
    });
    
