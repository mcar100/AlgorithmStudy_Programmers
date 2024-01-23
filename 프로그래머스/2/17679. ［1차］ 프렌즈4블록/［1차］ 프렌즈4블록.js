// 통과 조건: 블록 4개가 같은 블록 -> 왼쪽 상단을 x,y라 하면 [[x,y][x,y+1],[x+1,y],[x+1,y+1]]이 같은 문양이어야 함
// 블록 채우기: x은 유지한채 y를 m-1 높이까지 요소가 있기 전까지 내려옴

// 배열 행과 열 바꾸기 -> 후 채우기 과정에서 용이
function transpose(m,n, matrix){
    const oldBoard = matrix.map(el=>el.split(''));
    const newBoard = [];
    for(let i=0; i<n; i++){
        const column = [];
        for(let j=0; j<m; j++){
            column.push(oldBoard[j][i]);
        }
        newBoard.push(column);
    }
    return newBoard;
}

function findTwoByTwoBlocks(width,height,board){
    const twoByTwoBlocks = [];
    for(let i=0; i< height; i++ ){
        for(let j=0; j< width; j++){
            const block = board[i][j];   // 좌상단
            if(block===CLEAR){             // 빈 공간일시 패스
                continue;
            }
            if(j+1===width||block!==board[i][j+1]){     // 우상단
                continue;
            }
            else if(i+1===height||block!==board[i+1][j]){    // 좌하단
                continue;
            }
            else if(block!==board[i+1][j+1]){           //우하단
                continue;
            }
            twoByTwoBlocks.push([i,j], [i,j+1], [i+1,j], [i+1,j+1]);
        }
    }
    return twoByTwoBlocks;
}

function fillBoardBlanks(width,height,newBoard){
    for(let i=0; i<height; i++){
        const text = newBoard[i].join('').padStart(width,' '); 
        for(let j=0; j<width; j++){
            if(text[j]===' '){
                newBoard[i][j]=CLEAR;
            }
            else{
                newBoard[i][j]=text[j];   
            }
        }
    }
}

// m과 n을 굳이 준 이유? transpose할떄 활용
const CLEAR = ''
function solution(m, n, board) {
    let answer = 0;
    const newBoard = transpose(m,n,board);
    
    while(1){
        const twoByTwoBlocks = findTwoByTwoBlocks(m,n,newBoard);
        if(twoByTwoBlocks.length===0){
            break;
        }
        for(let i=0; i<twoByTwoBlocks.length;i++){
            const [y,x] = twoByTwoBlocks[i];
            if(newBoard[y][x]!==CLEAR){
                newBoard[y][x] = CLEAR;
                answer++;
            }
        }
        fillBoardBlanks(m,n,newBoard);
    }
    return answer;
}
