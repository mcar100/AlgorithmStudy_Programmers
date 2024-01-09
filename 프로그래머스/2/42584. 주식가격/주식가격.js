/*
    스택을 이용해 풀 경우
    [1,2,3,2,3]
    
    떨어짐이 발생하면 pop
    삽입할 요소:2, 스택: [1,2,3] -> 발생 구간1
    [1,2,2]   3은 pop
*/

function solution(prices) {
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) {
        break;
      }
    }

    result.push(count);
  }

  return result;
}