

function solution(n) {
    let count = 0;
    let start = 1;
    let num = 0; 
    let limit = Math.ceil(n/2)
    
    console.log(limit);
    while(start<limit){
        for(let i=start; i<n; i++){
            if(num>=n){
                if(num===n){
                    count++;
                }
                start++;
                num=0;
                break;
            }
            else{
                num += i;
            }
        }        
    }
    return count+1;
}