function solution(k, m, score) {
    let answer = 0;
    score.sort((a,b)=>b-a);
    const boxNum = Math.floor(score.length/m);
    
    for(let i=1; i<=boxNum; i++){
        answer += score[m*i-1]*m
    }
    
    return answer;
}