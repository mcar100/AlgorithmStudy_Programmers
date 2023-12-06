// 우선순위가 높을 수록 해당 프로세스 실행
// 프로세스가 실행되면 첨부터가 아닌 이어서 실행
function findHighestPriorityIndex(array){
    let value = 0;
    let arrayIndex = 0;
    array.forEach((element,index)=>{
        if(value<element[1]){
            value = element[1];
            arrayIndex = index;
        }
    });
    
    return arrayIndex;
}


function solution(priorities, location) {
    let priorityArray = priorities.map((priority,index)=>[index,priority]);
    const length = priorityArray.length;
    const answer = [];
    
    for(let i=0; i<length; i++){
        const highestIndex = findHighestPriorityIndex(priorityArray);
        answer.push(priorityArray[highestIndex]);
        priorityArray = [...priorityArray.slice(highestIndex+1,priorityArray.length),...priorityArray.slice(0,highestIndex)];
    }
    return answer.findIndex(ele=>ele[0]===location)+1;
}