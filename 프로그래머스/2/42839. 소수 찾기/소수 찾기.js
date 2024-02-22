/*
    numbers: 1~7이하 문자열, 각 문자는 0~9로만 이루어짐
    
    해결 방식
    1. 문자열을 쪼개서 모든 숫자의 경우의 수를 구함
    2. 각 경우의 수에 대한 소수 여부 판정
    3. 소수 갯수 리턴
*/

function checkPrimeNumber(n){
    if(n===0||n===1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

function solution(numbers) {
    
    if(numbers.length===1){
        const check = checkPrimeNumber(Number(numbers[0]));
        return check? 1 : 0;
    }
    
    const numberCases = [];
    
    function dfs(restNumber, numberSet, maxSize){
        if(numberSet.length===maxSize){
            const number = Number(numberSet.join(''));
            if(!numberCases.includes(number)){
                numberCases.push(number);
            }
            return;
        }
        for(let i=0; i<restNumber.length; i++){
            const n = restNumber[i]; 
            const rest = [...restNumber.slice(0,i),...restNumber.slice(i+1)];
            dfs(rest, [...numberSet,...n], maxSize);
        }   
    }
    
    for(let i=0; i<numbers.length; i++){
        dfs(numbers.split(''),[], i+1);
    }

    return numberCases.filter(n=>checkPrimeNumber(n)).length;
}