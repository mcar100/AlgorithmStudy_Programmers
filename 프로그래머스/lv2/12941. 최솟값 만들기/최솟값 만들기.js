function solution(A,B){
    const sortedA = A.sort((a,b)=>a-b);
    const sortedB = B.sort((a,b)=>b-a);
    
    const answer = sortedA.reduce((acc,cur,idx)=>{
        acc = acc+(cur*sortedB[idx]); 
        return acc;
    },0)
    
    return answer;
}