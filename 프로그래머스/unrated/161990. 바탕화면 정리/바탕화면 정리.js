function solution(wallpaper) {
    const hasPaper = [];
    
    wallpaper.forEach((line,i)=>{
        for(let j=0; j<line.length; j++){
          if(line[j]==='#'){
            hasPaper.push([i,j]);
          }
        }
    })
    
    const xArray = hasPaper.map(i=>i[0]).sort((a,b)=>a-b);
    const yArray = hasPaper.map(i=>i[1]).sort((a,b)=>a-b);
    
//       012345678
//     0[.##...##.]
//     1[#..#.#..#]
//     2[#...#...#]
//     3[.#.....#.]
//     4[..#...#..]
//     5[...#.#...]
//     6[....#....]

    //  01
    //0[..]
    //1[#.]   -> 10

    return [xArray[0],yArray[0],xArray[xArray.length-1]+1,yArray[yArray.length-1]+1];
}