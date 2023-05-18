function solution(survey, choices) {
    var map = new Map();
    var questionMap = {
        1: -3,
        2: -2,
        3: -1,
        4: 0,
        5: 1,
        6: 2,
        7: 3,
    }
    map.set("RT",0);
    map.set("CF",0);
    map.set("JM",0);
    map.set("AN",0);
    
    
    survey.forEach((i,idx)=>{
        let point = questionMap[choices[idx]]; 
        if(map.has(i)){
            map.set(i, map.get(i)-point)
        }
        else{
            let minus = i.split('').reverse().join('');
            map.set(minus, map.get(minus)+point)
        }
        
    })

    let answer = '';
    for( let [key, value] of map){
        if(value<0){
            answer += key[1];
        }
        else{
            answer += key[0]
        }
    }
    
    return answer;
}