function solution(participant, completion) {
    const map = new Map();
    
    participant.forEach(person=>{
        if(map.has(person)){
          map.set(person,map.get(person)+1)  
        }
        else{
            map.set(person,1)
        }
    })
    
    completion.forEach(person=>{
        if(map.has(person)){
            map.set(person,map.get(person)-1)
        }
    })
    
    let answer = ''
    map.forEach((value,key)=>{
        if(value){
            answer = key;
        };   
    })
    
    return answer;
}