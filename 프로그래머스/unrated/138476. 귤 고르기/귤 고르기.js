function solution(k, tangerine) {
    const sizeMap = new Map();
    const sizeNumber = [];
    let answer = 0;
    
    for(let i=0; i<tangerine.length; i++){
        const size = tangerine[i];
        if(!sizeMap.has(size)){
            sizeMap.set(size,1);
        }
        else{
            let temp = sizeMap.get(size);
            temp++;
            sizeMap.set(size, temp);
        }
        
    }
    
    
    sizeMap.forEach((value)=>{
        sizeNumber.push(value);
    })
    
    sizeNumber.sort((a,b)=>b-a).reduce((acc,cur)=>{
        if(acc>0){
            acc -= cur;
            answer++;
            return acc;
        }
    },k)
    
    return answer;
}