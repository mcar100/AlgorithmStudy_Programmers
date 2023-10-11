// 1 - 1행1열
// 2 - 1행2열, 2행1열 2행2열
// 3 - 1행3열 2행3열 3행1열 3행2열 3행3열
// 규칙1: 행,열중 더 큰 쪽 값을 가짐

// n=4, left=7, right14 일때
// 7(8) - 2행4열  2...0
// 8(9) - 3행1열  2...1
// 9(10) - 3행2열 2...2
// 10(11) - 3행3열 2...3
// 11(12) - 3행4열 3...0
// 12(13) - 4행1열 3...1
// 13(14) - 4행2열 3...2
// 14(15) - 4행3열 3...3
// 규칙2: idx+1을 n으로 나누면 값과 나머지에 따른 행과 열이 나온다.


// 방법2: left, right만큼의 배열을 생성하고 어떤 값이 들어갈지 추측하여 값을 넣는다.
function solution(n, left, right) {
    const answer = [];
    
    for(let idx=left; idx<=right; idx++){
        let row = Math.ceil((idx+1)/n);
        let col = (idx+1)%n;
        if(col===0){
          answer.push(Math.max(row,n));
        }
        else{
          answer.push(Math.max(row,col));    
        }
        
    }
    
    return answer;
}

// // 방법1: 배열을 만들고 left, right만큼 잘라낸다    
// function solution(n,left,right){
//     const answer = [];
//     for(let i=1; i<=n; i++){    
//         for(let j=1; j<=n; j++){
//             const num = Math.max(i,j);
//             answer.push(num);
//         }
//     }
//     return answer.slice(left,right+1);
// }
// // 결과: 배열을 만드는데 너무 오랜 시간이 걸린다.