function solution(sizes) {
    const sorted_sizes = sizes.map(size=>{
        if(size[0]>size[1]){
            let temp = size[0];
            size[0] = size[1];
            size[1] = temp;
        }
        return size;
    });
    const sorted_x = sorted_sizes.sort((a,b)=>b[0]-a[0]);
    const max_x = sorted_x[0][0];
    const sorted_y = sorted_sizes.sort((a,b)=>b[1]-a[1]);
    const max_y = sorted_y[0][1];
    return max_x*max_y;
}