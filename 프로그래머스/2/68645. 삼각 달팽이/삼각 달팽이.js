/*
    목표: 높이가 n인 삼각 달팽이 배열 반환하기
    -> 삼각달팽이: 꼭대기부터 시작해 좌->아래->우 방향으로 요소들의 값이 증가
    ex) n=4
            1   n-3개
           2 9  n-2개
         3 10 8  n-1개
        4 5  6 7  n개
    
    h=1 -> 1                     
    h=2 -> 2 9               p1+1 p1+2
    h=3 -> 3 10 8          p2
    h=4 -> 4 5 6 7
    
    [1,2,9,3,10,8,4,5,6,7]
    -> 순서: 0(1),1(2),3(3),6(4),7(5),8(6),9(7),5(8),2(9),4(10)
    
*/
function createBlankArray(n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(new Array(i + 1).fill(0));
  }
  return array;
}

function solution(n) {
  if(n===2){
      return [1,2,3];
  }
    
  const answer = createBlankArray(n);
  const vectorX = [0, 1, -1];
  const vectorY = [1, 0, -1];
  let [row, col, vIdx] = [0, 0, 0];
  let [maxRow, maxCol] = [n - 1, n - 1];
  const max = (n * (n + 1)) / 2;
  let value = 1;

  while (value <= max) {
    answer[row][col] = value;
    row += vectorY[vIdx];
    col += vectorX[vIdx];
    if (vIdx === 0 && row === maxRow) {
      vIdx = 1;
      maxRow -= 1;
    } else if (vIdx === 1 && col === maxCol) {
      vIdx = 2;
      maxCol -= 2;
    } else if (vIdx === 2 && answer[row - 1][col - 1] !== 0) {
      vIdx = 0;
    }
    value++;
  }
  return answer.flat();
}