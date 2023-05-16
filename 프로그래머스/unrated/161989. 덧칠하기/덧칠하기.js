function solution(n, m, section) {
    var answer = 0;
    const wall = new Array(n).fill(false);
    
    for(let i=0; i<section.length; i++){
        wall[section[i]-1] = true;
    }
    
    let idx = 0;
    while(idx<wall.length){
        if(wall[idx]){
            idx += m; 
            answer++;
        }
        else{
            idx++;
        }
    }
    
    return answer;
}