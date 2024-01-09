function solution(prices) {
    var answer = [];
    
    for(let i=0; i<prices.length; i++){
        let findIndex = -1;
        for(let j=i+1; j<prices.length; j++){
            if(prices[i]>prices[j]){
                findIndex = j;
                break;
            }
        }
        if(findIndex !== -1){
            answer.push(findIndex-i);   
        }
        else{
            answer.push(prices.length-i-1);   
        }
    }
    
    return answer;
}