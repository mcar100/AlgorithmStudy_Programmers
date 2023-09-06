function gcd(a,b){
    let num = 1;
    for(let i=1; i<=Math.min(a,b); i++){
        if(a%i===0&&b%i===0){
            num = i;
        }
    }
    
    return num;
}

function lcm(a,b){
    return  (a*b) / gcd(a,b);
}

function solution(arr) {
    return arr.reduce((acc,cur)=>acc=lcm(cur,acc),1)
}