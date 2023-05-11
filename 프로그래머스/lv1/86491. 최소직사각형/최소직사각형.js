function solution(sizes) {
    const answer = [0,0];
    
    const sorted_sizes = sizes.map(size=>{
        if(size[0]>size[1]){
            let temp = size[0];
            size[0] = size[1];
            size[1] = temp;
        }
        return size;
    });
    
    sorted_sizes.forEach(size=>{
        if(size[0]>answer[0]){
            answer[0] = size[0];
        }
        if(size[1]>answer[1]){
            answer[1] = size[1];
        }
    })
    return answer[0]*answer[1];
}