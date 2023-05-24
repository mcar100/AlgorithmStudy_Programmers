function solution(n) {
    let check = false;
    
    let demical1 = n.toString(2).split('').filter(m=>m==='1');
    
    let nextNum = n+1;
    
    while(!check){
        let demical2 = nextNum.toString(2).split('').filter(m=>m==='1');
        
        if(demical1.length === demical2.length){
            check = true;
        }
        else{
            nextNum++;
        }
    }
    return nextNum;
}