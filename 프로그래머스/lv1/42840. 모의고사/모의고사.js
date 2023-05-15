function solution(answers) {
    const answerArray = [0,0,0];    // 각 사람별 정답 횟수
    let max = 0;    // 가장 많이 맞춘 횟수
    const answer = [];              // 가장 많이 맞춘 사람을 담는 배열
    const p1 = [1,2,3,4,5];
    const p2 = [2,1,2,3,2,4,2,5]; 
    const p3 = [3,3,1,1,2,2,4,4,5,5];
    
    answers.forEach((answer,idx)=>{
        if(answer===p1[idx%p1.length]){
            answerArray[0]++;
        }
        if(answer===p2[idx%p2.length]){
            answerArray[1]++;
        }
        if(answer===p3[idx%p3.length]){
            answerArray[2]++;
        }
    })
    
    max = Math.max(...answerArray);
    for(i=0; i<3; i++){
        if(answerArray[i]===max){
            answer.push(i+1);
        }
    }
    
    
    return answer;
}