const xMove = [1, -1, 0, 0];
const yMove = [0, 0, 1, -1];
const moveIndex = { 'R':0, 'L':1, 'U':2, 'D':3 };
const maxLength = 5;

// -1,0 -> -2,0
// -1,0 -> -1, 1  -1, 0.5

function solution(dirs) {    
    let beforePoint = [0,0]; // x, y
    const newRoute = [];
    
    dirs.split('').forEach((str,idx)=>{
        let x = beforePoint[0];
        let y = beforePoint[1];
        
        let direction = moveIndex[str];
        const nextX = x + xMove[direction];
        const nextY = y + yMove[direction];
        const line = [(nextX+x)/2, (nextY+y)/2];
        if(Math.abs(nextX)<=maxLength&&Math.abs(nextY)<=maxLength){
            const index = newRoute.findIndex(el=>el[0]===line[0]&&el[1]===line[1]);
            if(index===-1){
                newRoute.push(line);
            }

            beforePoint = [nextX,nextY];    
        }
    })

    return newRoute.length;
}