/* 연산식
    1. x+n  -> y-n
    ===============
    2. x*2  -> y/2
    3. x*3  -> y/3
*/


function solution(x, y, n) {
    const bfs = [{z:y,count:0}];
    const operand = [3,2,n];
    const operator = ['/','/','-'];
    
    if(x===y){
        return 0;
    }
    
    while(bfs.length!==0){
        const {z,count} = bfs.shift(); 
        if(z===x){
            return count;
        }
        for(let i=0; i<operand.length; i++){
            let newZ = z;
            if(operator[i]==='/'){
                newZ /= operand[i];
            }
            else if(operator[i]==='-'){
                newZ -= operand[i];
            }

            if(newZ < x){
                continue;
            }
            if(!Number.isInteger(newZ)){
                continue;
            }
            bfs.push({z:newZ, count:count+1});
        }
                
    }
    return -1;

}