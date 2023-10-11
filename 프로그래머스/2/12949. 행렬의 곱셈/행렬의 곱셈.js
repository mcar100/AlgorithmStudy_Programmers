// 행렬의 곱셈
//   A     B                         C
//  1 4   3 3   1x3+4x3 1x3+4x3    15 15
//  3 2 x 3 3 = 3x3+2x3 3x3+2x3 =  15 15
//  4 1         4x3+1x3 4x3+1x3    15 15
//
//  a1 a2  b1 b2     a1b1+a2b3 a1b2+a2b4
//  a3 a4  b3 b4  =  a3b1+a4b3 a3b2+a4b4
//  a5 a6            a5b1+a6b3 a5b2+a6b4

function solution(arr1, arr2) {
    const answer = [];
    for(let i=0; i<arr1.length; i++){
        const array = [];
        for(let j=0; j<arr2[0].length; j++){
            let sum = 0;
            for(let k=0; k<arr2.length; k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            array.push(sum);
        }
        answer.push(array);
    }
    
    
    
    return answer;
}