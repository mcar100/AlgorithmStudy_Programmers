function solution(topping) {
    var answer = 0;
    const map1 = new Map();
    const map2 = new Map();
    topping.forEach(type=>{
        if(!map1.has(type)){
            map1.set(type,1);
        }
        else{
            map1.set(type,map1.get(type)+1);
        }
    })
    
    for(let i=0; i<topping.length; i++){
        const type = topping[i];
        
        map1.set(type,map1.get(type)-1);
        if(map1.get(type)===0){
            map1.delete(type);
        }
        
        if(!map2.has(type)){
            map2.set(type,1);
        }
        
        if(map1.size===map2.size){
            answer++;
        }
        else if(map1.size < map2.size){
            break;
        }
    }

    
    return answer;
}