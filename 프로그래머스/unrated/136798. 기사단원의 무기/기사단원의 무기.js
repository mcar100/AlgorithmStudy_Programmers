function solution(number, limit, power) {
    const divisorArray = [];

    for(i=1;i<=number;i++){
        let count = 0;
        for(j=1; j*j<=i; j++){
            if(j*j===i){
                count++;
            }
            else if(i%j===0){
                count += 2;
            }
        }
        if(count>limit){
            divisorArray.push(power);
        }
        else{
            divisorArray.push(count);            
        }

    }    
    return divisorArray.reduce((acc,cur)=>{acc+=cur; return acc;},0);
}