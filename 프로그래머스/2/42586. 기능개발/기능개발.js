function solution(progresses, speeds) {
    const answer = [];
    while(progresses.length!==0){
        progresses.forEach((progress,idx)=>{
            progresses[idx] += speeds[idx];
        })
        
        if(progresses[0]>=100){
            let completeIndex = progresses.findIndex(progress=>progress<100);
            if(completeIndex === -1){
                answer.push(progresses.length);
                break;
            }
            const splicedArray = progresses.splice(0,completeIndex);
            speeds.splice(0,completeIndex);
            answer.push(splicedArray.length);
        }
    }
    return answer;
}