/*
    - 길이가 같은 두 개의 큐 A, B
    - 하나의 큐를 골라 원소를 추출(pop), 다른 쪽에 집어넣어(insert)
        각 큐의 원소의 합을 같도록 만들려고 함.
    목표: 이때 필요한 작업의 최소 횟수 (1회 = pop+insert 1회)
    
    특징 
    1) 각 큐의 값 = 두 큐의 모든 원소의 합/2
    2) 최대 횟수 = 모든 원소의 갯수-1 (2n-1)
        -> q1에서 모든 원소를 q2로 보냄
        -> q2에서 모든 원소를 q1으로 보냄
        
        ex) 
        q1 = [3,2,7,2]
        q2 = [4,5,6,1]
        
        q1 = []
        q2 = [4,5,6,1,3,2,7,2]
        -> 4 (n)
        
        q1 = [4,5,6,1,3,2,7]
        q2 = [2]
        -> 4+3 (n+n-1)
*/


function sumElements(queue){
    const sum = queue.reduce((acc,cur)=>{
        acc+=cur;
        return acc;
    },0);
    return sum;
}

function solution(queue1, queue2) {
    const max = (3*queue1.length);
    let count = 0;
    let idx1 = 0;
    let idx2 = 0;
    let sum1 = sumElements(queue1);
    let sum2 = sumElements(queue2);
    const value = (sum1+sum2)/2;
    
    while(sum1!==value){
        if(sum1>sum2){
            const popElement = queue1[idx1];
            idx1++;
            queue2.push(popElement);
            sum1-=popElement;
            sum2+=popElement;
        }
        else if(sum1 < sum2){
            const popElement = queue2[idx2];
            idx2++;
            queue1.push(popElement);
            sum1+=popElement;
            sum2-=popElement;
        }
        count++;
        if(count > max){
           return -1;
        }
    }
    
    
    
    return count;
}