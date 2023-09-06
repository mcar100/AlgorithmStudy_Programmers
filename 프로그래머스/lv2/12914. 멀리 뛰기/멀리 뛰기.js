function solution(n){
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i=2; i<=n; i++){
        dp[i] = (dp[i-2]+dp[i-1])%1234567
    }
    
    return dp[n];
}


/*
// 틀렸던 나의 방식 접근 - 같은 것을 포함하는 순열
function factorial(n){      // 팩토리얼 계산
    let result = 1;
    for(let i=2; i<=n;i++){
        result *= i;
    }
    return result;
}

function getPermutation(a,b){
    const top = factorial(a+b);
    const bottom = factorial(a)*factorial(b);
    return top/bottom;
}

function solution(n) {
    let countTwo = 0;
    let countOne = 0;
    let answer = 0;
    
    // 2가 가장 많은 경우의 2의 갯수와 1의 갯수 구하기
    if(n%2===0){
        countTwo = n/2;
    }
    else{
        countTwo = (n-1)/2;
        countOne = 1;
    }

    while(countTwo>=0){
        answer += getPermutation(countTwo,countOne);
        countTwo -= 1;
        countOne += 2;
    }
    
    return answer%1234567;
}
*/