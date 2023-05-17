function solution(X, Y) {
    const arrayX = X.split('').sort((a,b)=>b-a);
    const arrayY = Y.split('').sort((a,b)=>b-a);
    const answer = [];
    
    arrayX.forEach(i=>{
        if(arrayY.includes(i)){
            let index = arrayY.indexOf(i);
            arrayY.splice(index,1);
            answer.push(i);
        }
    })        
    

    
    return answer.length? String(Number(answer.join(''))) : "-1";
}