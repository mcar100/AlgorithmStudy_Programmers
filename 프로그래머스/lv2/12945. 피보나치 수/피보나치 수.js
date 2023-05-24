function fibonacchi(n){
    
    let num = [0,1,1] 
    for(let i=3; i<=n; i++){
        num[i] = (num[i-1] + num[i-2])%1234567
    }
    return num[n]
}

function solution(n) {
    return fibonacchi(n)%1234567;
}