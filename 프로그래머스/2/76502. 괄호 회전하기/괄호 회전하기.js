// 괄호 맵
const PARENTHESES = {
    '[': ']',
    '(': ')',
    '{': '}'
}

// 왼쪽으로 이동한 문자열 반환하는 함수
function moveToLeft(str,idx){
    const combinedString = str.slice(idx) + str.slice(0,idx);
    return combinedString;
}

// 올바른 괄호를 확인하는 함수
function checkCorrectString(str){
    let check = [];
    const regex = /^[\(\{\[]/;
    
    for(let i=0; i<str.length; i++){
        // 여는 괄호 스택에 추가
        if(regex.test(str[i])){
            check.push(str[i]);
        }
        // 닫는 괄호면 스택에서 pop
        else{
            // 스택이 비어있을 시 false
            if(check.length===0){
                return false;
            }
            
            const popStr = check.pop();
            // pop한 괄호의 닫힌 괄호와 문자열이 다르면 false
            if(str[i] !== PARENTHESES[popStr]){
                return false;
            }
        }
    }

    // 스택이 완전히 비워지면 true
    if(check.length===0){
        return true;
    }
    return false;
    
}

function solution(s) {
    let answer = 0;
    
    // 길이가 홀수면 짝이 안맞으므로 0 반환 
    if(s.length%2===1){
        return 0;
    }
    
    for(let i=0; i<s.length; i++){
        const string = moveToLeft(s,i);
        // 올바른 괄호 문자열이면 카운트
        if(checkCorrectString(string)){
            answer++;
        }
    }
    
    return answer;
}