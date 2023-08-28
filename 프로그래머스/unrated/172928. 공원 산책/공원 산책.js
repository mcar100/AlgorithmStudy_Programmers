// 시작지점 찾는 함수
function findStartPos(park){
    const startPos = [];
    park.forEach((p,xPos)=>{
        const yPos = p.indexOf('S'); 
        if(yPos>-1){
            startPos.push(xPos);
            startPos.push(yPos);
            return;
        }
    });
    return startPos;
}

function solution(park, routes) {
    const parkArray = park.map((p)=>p.split(''));
    const dirObj = {
        'E': [0,1],
        'W': [0,-1],
        'S': [1,0],
        'N': [-1,0],
    }
    let startPos = findStartPos(park);
    const height = park.length-1;
    const width = park[0].length-1;

    routes.forEach((route)=>{
        const [dir,n] = route.split(' ');
        const tempPos = [...startPos];
        if(dir==='E'){
            if(startPos[1]+Number(n)>width){
                return;
            }
            for(let i=0; i<n; i++){
                if(parkArray[startPos[0]][startPos[1]+1]==='X'){
                    startPos = tempPos;
                    break;
                }
                else{
                    startPos[1] += 1;
                }
            }
        }
        else if(dir==='W'){
            if(startPos[1]-Number(n)<0){
                return;
            }
            for(let i=0; i<n; i++){
                if(parkArray[startPos[0]][startPos[1]-1]==='X'){
                    startPos = tempPos;
                    break;
                }
                else{
                    startPos[1] -= 1;
                }
            }            
        }
        else if(dir==='S'){
            if(startPos[0]+Number(n)>height){
                return;
            }
            for(let i=0; i<n; i++){
                if(parkArray[startPos[0]+1][startPos[1]]==='X'){
                    startPos = tempPos;
                    break;
                    
                }
                else{
                    startPos[0] += 1;
                }
            }            
        }
        else if(dir==='N'){
            if(startPos[0]-Number(n)<0){
                return;
            }
            for(let i=0; i<n; i++){
                if(parkArray[startPos[0]-1][startPos[1]]==='X'){
                    startPos = tempPos;
                    break;
                }
                else{
                    startPos[0] -= 1;
                }
            }            
        }
    })

    return startPos;
}