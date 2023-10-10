const PARENTHESES = {
    '[': ']',
    '(': ')',
    '{': '}'
}

function moveToLeft(str,idx){
    const sliced1 = str.slice(0,idx);
    const sliced2 = str.slice(idx,str.length);
    const combinedString = sliced2.concat(sliced1);
    return combinedString;
}

function checkCorrectString(str){
    let check = [];
    const regex = /^[\(\{\[]/;
    for(let i=0; i<str.length; i++){
        if(regex.test(str[i])){
            check.push(str[i]);
        }
        else{
            if(check.length===0){
                return false;
            }
            
            const popStr = check.pop();
            if(str[i] !== PARENTHESES[popStr]){
                console.log(str[i], popStr);
                return false;
            }
        }
    }

    if(check.length===0){
        return true;
    }
    return false;
    
}

function solution(s) {
    let answer = 0;
    
    for(let i=0; i<s.length; i++){
        const string = moveToLeft(s,i);
        if(checkCorrectString(string)){
            answer++;
        }
    }
    
    return answer;
}