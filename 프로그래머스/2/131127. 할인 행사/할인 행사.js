function solution(want, number, discount) {
    let answer = 0;
    const wantMap = new Map();
    
    // 원하는 상품과 갯수 매핑
    want.forEach((w,idx)=>{
        wantMap.set(w,number[idx])
    })
    
    // 날짜 카운트
    discount.forEach((d,idx)=>{
        // 남은 날짜가 10일보다 적을 시 break
        if(discount.length-idx<10){
            return answer;
        }
        // 지정 날짜의 상품이 있으면 카운트
        if(wantMap.has(d)){
            // 카운트할 맵 생성
            const countMap = new Map(wantMap);
            
            // 지정 날짜로부터 10일동안의 상품 확인
            for(let i=idx; i<idx+10; i++){
                const item = discount[i];
                // 상품 카운트
                if(countMap.has(item)){
                    countMap.set(item, countMap.get(item)-1);
                }
                // 원하는 갯수만큼 채울 시 제거
                if(countMap.get(item)===0){
                    countMap.delete(item);
                }
            }
            // 모든 상품을 원하는 갯수만큼 구매시 카운트
            if(countMap.size===0){
                answer++;
            }
        }
        
    })
    
    return answer;
}