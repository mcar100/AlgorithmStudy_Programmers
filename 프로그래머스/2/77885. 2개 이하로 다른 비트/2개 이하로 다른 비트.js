/*
   y = f(x) 
    짝수 case ex)
        x=2 -> 10 
        y=3 -> 11 -> 차이 1개 -> 정답
        
        x=8 -> 1000
        y=9 -> 1001 -> 차이 1개 -> 정답
        -> 짝수의 경우 1비트만 추가되어도 정답
        
        
    홀수 case ex)
        x=5 -> 0101
        y=6 -> 0110 -> 차이 2개 -> 정답
        
        x=7 -> 0111
        y=8 -> 1000 -> 차이 4개
        y=9 -> 1001 -> 차이 3개
        y=10 -> 1010 -> 차이 3개
        y=11 -> 1011 -> 차이 4개 -> 정답
        -> 홀수의 경우 비교가 필요
        
    효율성 ex)
        만약 
        x -> 011111111111111111 인 경우
        y -> 101111111111111111를 찾으면 됨
*/

function f(x){
    const binaryYLength = (x+1).toString(2).length
    const binaryX = x.toString(2).padStart(binaryYLength,'0').split('');
    const zeroIndex = binaryX.lastIndexOf('0');
    binaryX.splice(zeroIndex,2,'1','0');
    return parseInt(binaryX.join(''),2);
}

function solution(numbers) {
    const answer = [];
    for(let i=0; i<numbers.length; i++){
        const x = numbers[i];
        if(x%2===0){
            answer.push(x+1);
        }
        else{
            answer.push(f(x));            
        }
    }
    return answer;
}