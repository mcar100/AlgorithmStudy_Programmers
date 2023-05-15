function solution(name, yearning, photo) {
    const result = [];
    
    photo.forEach(array=>{
        const point = array.reduce((acc,cur)=>{
            if(name.includes(cur)){
                acc += yearning[name.indexOf(cur)];
            }
            return acc;
        },0)
        result.push(point);
    })
    
    
    return result;
}