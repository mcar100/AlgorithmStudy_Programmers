function solution(s) {
    let cc = 0; // 이진 변환 횟수  conversionCount;
    let rc = 0; // 제거된 0의 수 removedCount
    
    while(s.length>1){
        const arr = s.split('').map(n=>{
            let removed = []
            if(n!=='0'){
                removed.push('1')
            }
            else{
                rc += 1;
            }
            return removed;
        }).join('');
        const len = arr.length;
        s = String(len.toString(2));
        cc += 1;
        console.log(s);
    }
    
    return [cc, rc];
}