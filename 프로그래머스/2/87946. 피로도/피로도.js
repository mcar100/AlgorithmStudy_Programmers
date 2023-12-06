function getPermutations(array,selectedNumber){
    const results = [];
    if(selectedNumber===1){
        return array.map(el=>[el]);
    }
    
    array.forEach((fixed, index, origin)=>{
        const rest = [...origin.slice(0,index), ...origin.slice(index+1)];
        const permutations = getPermutations(rest,selectedNumber-1);
        const attached = permutations.map((el)=>[fixed,...el]);
        results.push(...attached);                
    });
    return results;
}

function getClearCases(fatigue,everyCases){
    const clearCases = [];
    everyCases.forEach(ec=>{
        const clearRoute = [];
        let currentFatigue = fatigue;
        for(let i=0; i<ec.length; i++){
            if(currentFatigue<ec[i][0]){
                break;
            }
            else if(currentFatigue<ec[i][1]){
                break;
            }
            else{
                currentFatigue -= ec[i][1];
                clearRoute.push(ec[i]);
            }
        }    
        clearCases.push(clearRoute);
    })    
    
    return Math.max(...clearCases.map(el=>el.length));
}

function solution(k, dungeons) {
    const everyCases = getPermutations(dungeons,dungeons.length);
    const clearCases = getClearCases(k,everyCases);

    return clearCases;
}