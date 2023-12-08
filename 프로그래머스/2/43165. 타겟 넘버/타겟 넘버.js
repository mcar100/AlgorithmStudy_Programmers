function solution(numbers, target) {
    let answers = 0;
    
    function dfs(count, sum){
        if(count===numbers.length){
           if(sum===target){
            answers++;
           }
           return;
        }
        dfs(count+1,sum+numbers[count]);
        dfs(count+1,sum-numbers[count])
    }
    dfs(0,0)
    return answers;
}