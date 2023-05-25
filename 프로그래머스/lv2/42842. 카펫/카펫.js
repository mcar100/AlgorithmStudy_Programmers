function solution(brown, yellow) {
    var answer = [];
    const num = brown+yellow;

    for(let i=3; i<num; i++){
        let width = num/i;
        let height = i;
        
        if(width<height) continue;
        
        if((width-2)*(height-2)===yellow){
            answer[0] = width;
            answer[1] = height;
        }
        
    }
    
    return answer;
}