/*
    0과 1로 이루어진 2^n x 2^n 크기의 2차원 정수 배열 arr
    목표: arr을 쿼드 트리 방식으로 압축 후 
         최종적으로 남은 0, 1의 개수를 배열에 담아 리턴
    
    쿼드 트리 방식
        1) 압축하고자 하는 영역을 S라 정의
        2) S 내부의 값이 모두 같다면, S를 해당 값 하나로 압축
        3) 그렇지 않다면 S를 균일한 정사각형 영역 4개로 쪼갠 뒤 2번을 다시 시도
        
    제한사항
        행의 개수 n은 2의 거듭 제곱수, arr은 정사각형 배열임
        
    ex)
        [ 1 1 0 0 ]     [ (0,0), (0,1), (0,2), (0,3) ]
        [ 1 0 0 0 ]     [ (1,0), (1,1), (1,2), (1,3) ]
        [ 1 0 0 1 ]     [ (2,0), (2,1), (2,2), (2,3) ]
        [ 1 1 1 1 ]     [ (3,0), (3,1), (3,2), (3,3) ]
        
        nxn = 4x4 -> (2x2)x4
        1024 -> 512 -> 256 -> 128 -> 64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1  
        ( n1 = n0/2 )
        S0 -> (0~n0)x(0~n0)
        S1-1 -> (0~n1-1)x(0~n1-1)
        S1-2 -> (0~n1-1)x(n1~n0-1)
        S1-3 -> (n1~n0-1)x(0~n1-1)
        S1-4 -> (n1~n0-1)x(n1~n0-1)
    
*/

function splitArray(arr, r0, r1, c0, c1){
    const newArray = [];
    for(let i=r0; i<r1; i++){
        const newRow = [];
        for(let j=c0; j<c1; j++){
            newRow.push(arr[i][j]);
        }
        newArray.push(newRow);
    }
    return newArray;
}

function solution(arr) {
    const elementCountArray = [];
    const n = arr.length;
    
    function quadTree(arr,n){
        if(n===1){
            elementCountArray.push(arr[0][0])
            return;
        }
        
        let check = true;
        const initValue = arr[0][0]
        for(let i=0; i<n; i++){
            for(let j=0; j<n; j++){
                if(initValue!==arr[i][j]){
                    check = false;
                    break;
                }
            }
        }
        
        if(check){
            elementCountArray.push(initValue);
            return;
        }
    
        const splitedSize = n/2;
        const arr1 = splitArray(arr, 0, splitedSize, 0, splitedSize);
        const arr2 = splitArray(arr, 0, splitedSize, splitedSize, n);
        const arr3 = splitArray(arr, splitedSize, n, 0, splitedSize);
        const arr4 = splitArray(arr, splitedSize, n, splitedSize, n);
        quadTree(arr1, splitedSize);
        quadTree(arr2, splitedSize);
        quadTree(arr3, splitedSize);
        quadTree(arr4, splitedSize);
        
    }
          
    
    quadTree(arr,n);
    
    
    return elementCountArray.reduce((acc,cur)=>{
        if(cur===0){
            acc[0]++;
        }
        else{
            acc[1]++;
        }
        return acc;
    },[0,0]);
}