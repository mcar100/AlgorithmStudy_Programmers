function solution(number) {
    var answer = [];
    const sorted_n = number.sort((a,b)=>a-b);
    sorted_n.map((n,idx)=>{
        for(let i=idx+1; i<sorted_n.length; i++){
            for(let j=i+1; j<sorted_n.length; j++){
                const check = n+number[i]+number[j]
                if(check===0){
                    answer.push([n,i,j]);
                }
            }
        }
    },0)
    
    
    return answer.length;
}