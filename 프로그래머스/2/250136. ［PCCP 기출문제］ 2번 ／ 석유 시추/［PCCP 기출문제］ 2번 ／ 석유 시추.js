function checkRange(land,x,y){
    if(x<0||y<0||x>=land.length||y>=land[0].length){
        return false;
    }
    if(land[x][y]===-1||land[x][y]===0){
        return false;
    }
    return true;
}

function mapOil(land, x, y, oil){
    oil.amount++;
    if(!oil.yPos.includes(y)){
        oil.yPos.push(y);   
    }
    land[x][y] = -1;
    
    
    for(let i=0; i<4; i++){
        const newX = x+xDir[i];
        const newY = y+yDir[i];
        if(!checkRange(land, newX, newY)){
            continue;
        }
        mapOil(land, newX, newY, oil);
    }
    
}

function mapOil2(land, init_x, init_y, oil){
    const queue = [{x:init_x, y:init_y}];
    land[init_x][init_y] = -1;
    while(queue.length){
        const pos = queue.shift();
        let x = pos.x;
        let y = pos.y
        oil.amount++;
        if(!oil.yPos.includes(y)){
            oil.yPos.push(y);   
        }
        
        for(let i=0; i<4; i++){
            const newX = x+xDir[i];
            const newY = y+yDir[i];
            if(!checkRange(land, newX, newY)){
                continue;
            }
            land[newX][newY] = -1;
            queue.push({x:newX,y:newY});
        }
    }    
}
const xDir = [0,0,1,-1];
const yDir = [1,-1,0,0]; 

function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const oilMap = [];
    let maxOil = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(land[j][i]!==1){
                continue;
            }
            const oil = { amount: 0, yPos: [] };
            mapOil2(land, j, i, oil);
            oilMap.push(oil);
        }
        let amount = 0;
        for(let k=0; k<oilMap.length; k++){
            const pos = oilMap[k].yPos;
            if(pos.includes(i)){
                amount+=oilMap[k].amount;
            }
        }
        if(maxOil < amount){
            maxOil = amount;
        }

    }
    return maxOil;   
}