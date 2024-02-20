/*
    n=1 -> 1
    n=2 -> 2
    n=3 -> 3
    n=4 -> 5
    n=5 -> 8
    n=6 -> 13
    ...
    -> 피보나치 수열
*/

function solution(n) {
    const memo = new Array(n+1).fill(0);
    const BIG_NUMBER = 10**9+7;
    
    memo[1] = 1;
    memo[2] = 2;    
    for(let i=3; i<=n; i++){
        memo[i] = (memo[i-1]+memo[i-2])%BIG_NUMBER;
    }
    
    return memo[n];
}