function solution(s) {
    const answer = [];
    const check = [];
    const stringArray = s.split(''); 
    for(i=0;i<s.length;i++){
        const alphabet = s[i];
        if(check.includes(alphabet)){
           answer.push(i-stringArray.indexOf(alphabet));
           stringArray[stringArray.indexOf(alphabet)] = '*';
       }
        else{
            check.push(alphabet);
            answer.push(-1);
        }
    }
    
    return answer;
}