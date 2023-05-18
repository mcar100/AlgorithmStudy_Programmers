function solution(keymap, targets) {
    var answer = [];
    const charMap = new Map
    let count = 0;
    
    
    keymap.forEach(item=>{
        for(let i=0; i<item.length; i++){
            let char = item[i];
            if(!charMap.has(char)){
                charMap.set(char,item.indexOf(char));
            }
            else if(charMap.has(char)&&charMap.get(char) > item.indexOf(char)){
                charMap.set(char,item.indexOf(char));
            }
        }
    })
        
    targets.forEach(target=>{
        let count = 0;
        for(let i=0; i<target.length; i++){
            let char = target[i];
            if(!charMap.has(char)){
                count = -1;
                break;
            }
            else{
                count += (charMap.get(char)+1)
            }
        }
        answer.push(count);
    })
    
    return answer;
}