function solution(players, callings) {
    let map = {}
    
    for(let i = 0; i<players.length; i++){
        map[players[i]] = i;
    }
    
    
    callings.forEach((call)=>{
        const idx = map[call];
        
        const temp = players[idx-1];
        players[idx-1] = players[idx];
        players[idx] = temp;
        
        map[call]--;
        map[players[idx]]++;
        
    })
    return players;
}