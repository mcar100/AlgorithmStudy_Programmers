function solution(array, commands) {
      const answer = commands.map(([i,j,k])=>{
      const slicedArray = array.slice(i-1,j).sort((a,b)=>a-b);
      return slicedArray[k-1];
    })
    return answer;
}