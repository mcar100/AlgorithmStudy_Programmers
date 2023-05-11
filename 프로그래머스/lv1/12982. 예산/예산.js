// 부서별 금액의 합 <= 예산
// 최대 지원 가능 부서의 수 리턴
function solution(d, budget) {
    const min_budget = 0;
    const sorted_d = d.sort((a,b)=>a-b);
    const answer = [];

    sorted_d.reduce((acc,cur)=>{
        if(acc-cur<0){
            return acc
        }
        acc -= cur
        answer.push(cur);
        return acc
    },budget);
    
    return answer.length;
}