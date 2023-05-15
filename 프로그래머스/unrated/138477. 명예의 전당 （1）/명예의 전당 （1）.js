function solution(k, score) {
    var answer = [];
    const fame = [];
    
    for(let i=0; i<score.length; i++){
        let min = 0;
        fame.push(score[i]);
        if(fame.length>k){
            fame.sort((a,b)=>b-a);
            fame.pop();
        }
        min = Math.min(...fame);
        answer.push(min);
    }
    return answer;
}