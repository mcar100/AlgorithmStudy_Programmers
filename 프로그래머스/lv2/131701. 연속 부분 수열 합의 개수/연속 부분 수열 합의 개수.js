function solution(elements) {
    const set = new Set();
    const length = elements.length;
    
    for(let i=1; i<=length; i++){
        // 첫 요소부터 마지막 요소까지 탐색
        for(let j=0; j<length; j++){
            let sum = 0;
            // 해당 요소부터 n개 연속으로 더하기
            for(let m=j; m<j+i; m++){
                sum += elements[m%length];
            }
            set.add(sum);
        }
    }
 
    return set.size;
}