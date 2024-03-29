function innerProduct(n1,n2){
    let result = 0;
    for(let i=0; i<n1.length; i++){
        result += n1[i]*n2[i]
    }
    return result;
}

function solution(a, b) {
    // const answer = innerProduct(a,b);
    const answer = a.reduce((acc,cur,idx)=>{
        acc += cur*b[idx];
        return acc
    },0)
    
    return answer;
}