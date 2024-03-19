/*
		목표: 아래 조건을 만족하는 수열의 시작과 끝 index 반환

    조건1: 임의의 두 idx 원소와 그 사이 모든 원소를 포함하는 부분 수열
    조건2: 부분 수열의 합 = k
    조건3: 길이가 제일 짧은 수열
    조건4: 길이가 같다면 가장 앞쪽의 수열
    
    제한 사항
    5 <= sequence <= 1,000,000 (sequence는 비내림 차순으로 정렬)
    1 <= sequence의 원소 <= 1,000
    5 <= k <= 1,000,000,000 (k는 항상 sequece의 부분 수열로 만들 수 있는 값)
*/

function solution(sequence, k) {
    let answer = [];
    let maxLength = Infinity;
    
    // prefix[i] =  sequence[0]~sequence[i-1]까지의 합    
    const prefix = [0];
    sequence.reduce((acc,cur)=>{
        acc += cur;
        prefix.push(acc);
        return acc;
    },0)
    console.log(prefix);

    let [startIdx, endIdx] = [0,0];
    let sum = 0;

    while(startIdx<=endIdx){
        let sum = prefix[endIdx]-prefix[startIdx];
        if(sum===k){
            let idxLength = endIdx - startIdx-1;
            if(idxLength < maxLength){
                answer = [startIdx, endIdx-1];
                maxLength = idxLength;
            }
        }
        
        
        
        if(sum<k){
            endIdx++;
        }
        else{
            startIdx++;
        }
    }
    
    return answer;
}