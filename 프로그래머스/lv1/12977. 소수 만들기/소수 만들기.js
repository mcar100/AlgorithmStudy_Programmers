function isPrime(n){
    if(n===2){
        return true;
    }
    for(let i=2; i<= Math.sqrt(n); i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

function solution(nums) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                const num = nums[i]+nums[j]+nums[k];
                if(isPrime(num)){
                    console.log(nums[i], nums[j], nums[k], num)
                    count++;
                }
            }
        }
    }
    
    return count;
}