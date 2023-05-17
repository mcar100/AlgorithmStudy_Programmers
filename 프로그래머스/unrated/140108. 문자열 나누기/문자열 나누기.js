function solution(s) {
    const answer = [];
    let string = "";
    let first = "";
    let xCount = 0;
    let otherCount = 0;
    
    s.split('').forEach(x=>{
        string += x;
        if(string.length===1) first = string[0];            
        
        if(x===first){
            xCount++;
        }
        else{
            otherCount++;
        }
        
        if(xCount===otherCount){
            answer.push(string);
            string = "";
            xCount = 0;
            otherCount = 0;
        }
    })
    if(string.length>0){
        answer.push(string);
    }
    return answer.length;
}