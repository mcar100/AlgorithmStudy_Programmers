function solution(n, lost, reserve) {
    const array = new Array(n).fill(0);
    
    lost.forEach(i=>{
        array[i-1]--;
    })
    
    reserve.forEach(i=>{
        array[i-1]++;
    })
    
    array.forEach((i,idx)=>{
        if(array[idx]===-1&&array[idx-1]===1){
            array[idx] = 0;
            array[idx-1] = 0;
        }
        else if(array[idx]===-1&&array[idx+1]===1){
            array[idx]=0;
            array[idx+1] = 0;
        }
    })
    console.log(array);
    
    return array.reduce((acc,cur)=>{if(cur!==-1) acc++; return acc;},0);
}