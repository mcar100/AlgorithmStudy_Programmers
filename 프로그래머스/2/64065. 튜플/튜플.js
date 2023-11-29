function solution(s) {
    var answer = [];
    // 문자열->배열
    const numberArray = s.replaceAll('{','').replaceAll('}','').split(',');
    const numberMap = new Map();
    // map을 통해 원소별 수량 체크
    numberArray.forEach(num=>{
        const check = numberMap.get(num);
        if(check){
            numberMap.set(num,check+1);
        }
        else{
            numberMap.set(num,1);
        }
    });
    
    // map을 배열로 만들고 수량에 따라 내림차순 정렬
    const mapToArray = Array.from(numberMap).sort((a,b)=>b[1]-a[1]);
    
    // 정렬된 요소를 순서대로 다시 배열에 삽입
    mapToArray.forEach(element=>answer.push(Number(element[0])));
    
    return answer;
}