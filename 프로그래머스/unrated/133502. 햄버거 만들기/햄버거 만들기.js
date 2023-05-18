function solution(ingredient) {
    let count = 0
    const bugger = []
    
    ingredient.forEach((i)=>{
        bugger.push(i);
        if(bugger.length>=4){
            const check = bugger.slice(-4).join('');  // 뒤에서 4개 자르고 자른 부분 리턴
            if(check==='1231'){
                bugger.splice(-4);                      // 뒤에서 4개 자른 자신을 리턴
                count++;    
            }
        }
        
    })
    
    
    return count;
}