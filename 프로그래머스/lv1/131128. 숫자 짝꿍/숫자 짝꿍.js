function solution(X, Y) {
    const mapX = new Array(10).fill(0);
    const mapY = new Array(10).fill(0);
        const answer = [];
    
    const arrayX = X.split('').forEach(item=>{
        mapX[item]++;
    });
    
    const arrayY = Y.split('').forEach(item=>{
        mapY[item]++;
    });
    
    mapX.forEach((i,idx)=>{
        for(let j=0; j<i; j++ ){
            if(mapY[idx]>0){
                answer.push(idx);
                mapY[idx]--;
            }            
        }
    })        
    
    if(answer.length !== 0 && Number(answer.join(''))===0) return '0';
    
    return answer.length? answer.sort((a,b)=>b-a).join('') : "-1";
}