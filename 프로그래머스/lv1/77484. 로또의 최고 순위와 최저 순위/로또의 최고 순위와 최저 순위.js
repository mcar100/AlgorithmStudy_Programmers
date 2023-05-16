function solution(lottos, win_nums) {
    let maxWin = 0;
    let minWin = 0;
    let zero = 0;
    
    lottos.forEach(n=>{
        if(win_nums.includes(n)){
            minWin++;
        }
        else if(n===0){
            zero++;
        }
    });
    
    if(zero>6){
        maxWin = 6;
    }
    else{
         maxWin = zero + minWin;   
    }
    
    if(minWin<1){
        minWin=1;
    }
    if(maxWin<1){
        maxWin=1;
    }
    
    return [7-maxWin, 7-minWin];
}