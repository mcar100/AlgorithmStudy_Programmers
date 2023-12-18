function solution(maps) {
    const directionRow = [0,0,1,-1];
    const directionColumn = [1,-1, 0,0]
    const currentRoute = [{ row: 0, column: 0, count: 1}];
    const maxRow = maps.length;
    const maxColumn = maps[0].length;
    
    while(currentRoute.length !== 0){
        const { row, column, count } = currentRoute.splice(0,1)[0];
        
        if(row === maxRow-1 && column === maxColumn -1 ){
                return count
        }
        
        for(let i=0; i<4; i++){
            const newRow = row+directionRow[i];
            const newColumn = column+directionColumn[i];
            
            if(newRow<0||newColumn<0){
                continue;
            }
            
            if(newRow>maxRow-1||newColumn>maxColumn-1){
                continue;
            }
            
            if(maps[newRow][newColumn]!==1){
                continue;
            }

            currentRoute.push({row: newRow, column: newColumn, count: count+1});
             maps[newRow][newColumn] = 0;
        }
        
    }
    
    
    return -1;
}