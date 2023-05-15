function solution(nums) {
    const map1 = new Map;
    const count = nums.length/2;   // 언제나 짝수
    
    nums.forEach(i=>{
        if(!map1.has(i)){
            map1.set(i,1);
        }
        else{
            map1.set(i,map1.get(i)+1)
        }
    });
    
    return map1.size>=count? count : map1.size;
}