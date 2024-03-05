/*
    목표: k개의 숫자를 제거하여 가장 큰 숫자 구하기
    
    특징
    1. 문자열의 순서는 바꿀수 없다.
    ex) 324, k -> 32, 34, 24만 가능 (43, 42 등 불가능)
    
    접근방식1
    1. 최종 숫자 문자열의 길이는 number.length-k개
    2. 숫자 문자열 내 가장 큰 숫자를 탐색
    3. 가장 큰 숫자를 정답 문자열에 추가하면서 찾은 숫자의 index만큼 삭제
        -> 이때 숫자 문자열을 index까지 잘랐을때 number.length-k보다 작으면 안됨
    4. 길이가 number.length-k가 될 때까지 반복

*/

function solution(number, k) {
    var answer = '';
    let numLimit = number.length-k;
    let biggestNumber = 0;
    let [curIndex, bigIndex] = [0,0];
    
    while(answer.length<number.length-k){
        let n = number[curIndex];
        if(biggestNumber < n){
            biggestNumber = n;
            bigIndex = curIndex;
        }
        
        if(number.length-curIndex===numLimit||biggestNumber === '9'){
            answer += biggestNumber;
            curIndex = bigIndex;
            biggestNumber = 0;
            numLimit--;
        }
        curIndex++;
        
    }
    return answer;
}