function solution(people, limit) {
    var answer = 0;
    const sortedPeople = people.sort((a,b)=>a-b);   // 오름차순 배열
    const overweightArray = [];                     // 혼자 타야되는 사람들 배열 
    
    for(let i = 0; i<sortedPeople.length; i++){     // index 0부터 시작
        let currentMaxIndex = sortedPeople.length-1;    // 현재 최대 index 
        let totalWeight = sortedPeople[i] + sortedPeople[currentMaxIndex];  // 가장 작은 사람과 큰 사람의 무게 합
        
        while(totalWeight>limit){   // 무게가 제한보다 클 시 배에 못탐
            overweightArray.push(sortedPeople.pop());           // 가장 작은 사람과도 못타는 큰 사람은 혼자 타야함
            if(i===--currentMaxIndex){
                break;
            }
            totalWeight = sortedPeople[i] + sortedPeople[currentMaxIndex];    // 다음으로 큰사람과 무게 합 구하기
        };
        sortedPeople.pop();     // 통과시 함께 탄 큰 사람은 빠짐
        answer++;   // 배 횟수 1 증가

    };
    

    return answer+overweightArray.length;
}