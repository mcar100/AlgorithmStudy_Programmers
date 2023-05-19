function solution(id_list, report, k) {
    const userMap = new Map;    // 메일 받을 횟수
    const reportedMap = new Map;     // 신고 받은 사람
    const answer = [];
    
    id_list.forEach(id=>{
        userMap.set(id,0);
    })

    const splitReport =report.map(r=>r.split(" "));
    splitReport.forEach(report=>{
        const reportedPerson = report[1];
        const reporter = report[0];
        if(!reportedMap.has(reportedPerson)){
            reportedMap.set(reportedPerson,[reporter]);
        }        
        else{
            const array = reportedMap.get(reportedPerson);
            if(!array.includes(reporter)) array.push(reporter);
            reportedMap.set(reportedPerson,array);
        }
    })

    for(let [key, value] of reportedMap){
        if(value.length >= k){
            for(let i=0; i<value.length; i++){
                userMap.set(value[i], userMap.get(value[i])+1)
            }
        }
    }

    for(let [key, value] of userMap){
        answer.push(value);
    }
    return answer;
}