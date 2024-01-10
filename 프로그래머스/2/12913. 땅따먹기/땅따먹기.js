function findBiggest(array){
    let biggest = 0;
    let index = 0;
    for(let i=0; i<array.length; i++){
        if(biggest < array[i]){
            biggest = array[i];
            index = i;
        }
    }
    return [biggest, index];
}

function solution(land) {
    let dp = Array.from(new Array(land.length),()=>Array(4).fill(0))
    
    for(let i=0; i<4; i++){
        dp[0][i] = land[0][i];
    }
    
    for(let i=1; i<land.length; i++){
        for(let j=0; j<4; j++){
            let biggest = 0;
            for(let k=0; k<4; k++){
                if(j==k){
                    continue;
                }
                if(biggest < dp[i-1][k]){
                    biggest = dp[i-1][k]
                }
            }
            dp[i][j] = land[i][j] + biggest;
        }
    }
    const result = dp.at(-1);
    return Math.max(result[0],result[1],result[2],result[3]);
}