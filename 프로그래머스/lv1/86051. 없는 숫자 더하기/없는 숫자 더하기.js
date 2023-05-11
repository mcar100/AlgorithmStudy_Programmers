function solution(numbers) {
    const number = [0,1,2,3,4,5,6,7,8,9];
    const answer = number
        .filter(n=>!numbers.includes(n))
        .reduce((acc,cur)=>{
            acc += cur;
            return acc; 
        },0);
    
    return answer;
}