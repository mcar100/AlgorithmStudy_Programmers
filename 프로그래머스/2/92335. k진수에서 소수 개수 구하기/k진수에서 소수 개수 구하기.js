function findPatterns(binary){
    const prime = [];
    const array = binary.split('0').map(el=>Number(el)).filter(el=>el!==0&&el!==1);
    array.forEach(el=>{
        const isPrime = checkPrime(el);
        if(isPrime){
            prime.push(el);   
        }
    })
    return prime;
}

function checkPrime(n){
    if(n===2){
        return true;
    }
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

function solution(n, k) {
    const binary = n.toString(k);
    const patternNums = findPatterns(binary);
    return patternNums.length;
}