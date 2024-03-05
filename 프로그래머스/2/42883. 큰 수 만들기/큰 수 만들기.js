/*
    목표: k개의 숫자를 제거하여 가장 큰 숫자 구하기
    
    특징
    1. 문자열의 순서는 바꿀수 없다.
    ex) 324, k -> 32, 34, 24만 가능 (43, 42 등 불가능)
    
    접근방식1-2
    1. 최종 숫자 문자열의 길이는 number.length-k개
    2. 숫자 문자열 내 가장 큰 숫자를 탐색
    3. 현재 탐색하고 있는 index가 문자열을 만드는데 필요한 남은 길이보다 
       커지게 되면 기존에 찾아놓은 가장 큰 숫자의 다음 index로 돌아감
        -> 이때 가장 큰 숫자를 문자열에 추가하고 큰 숫자 초기화 
    4. 길이가 number.length-k가 될 때까지 반복

	접근방식1-3	
	5. 숫자 9를 탐색할 경우 그 단계의 탐색은 종료 (가장 큰 숫자이므로)
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