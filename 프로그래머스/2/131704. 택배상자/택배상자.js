function solution(order) {
    const mainBelt = new Array(order.length).fill(0).map((_,idx)=>order.length-idx);
    const subContainer = [];
    let answer = 0;
    
    for(let i=0; i<order.length; i++){
        const orderNumber = order[i];
        let boxNumber = 0
        
        while(true){
            if(mainBelt[mainBelt.length-1]<=orderNumber){
                boxNumber = mainBelt.pop();
            }
            else{
                boxNumber = subContainer.pop();
            }
            
                    
            if(boxNumber===orderNumber){
                answer++;
                break;
            }
            else{
                if(mainBelt[mainBelt.length-1]>orderNumber){
                    return answer;
                }
                else{
                    subContainer.push(boxNumber);   
                }
            }   
        }
        
    }
    
    return answer;
}