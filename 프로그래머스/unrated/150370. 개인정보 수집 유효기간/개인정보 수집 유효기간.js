// 문자열을 쪼개 2차원 배열로 만드는 함수
function make2DimensionArray(array){
    const newArray = [];
    array.forEach(e=>newArray.push(e.split(' ')));
    return newArray;
}

// 두 날짜를 비교하는 함수
function compareTodayTerms(today, privacy, term){
    const todayDate = new Date(today);
    const privacyDate = new Date (privacy);
    privacyDate.setUTCMonth(privacyDate.getUTCMonth()+Number(term));
    return privacyDate <= todayDate? true:false;
}

function solution(today, terms, privacies) {
    const answer = [];
    const termsArr = make2DimensionArray(terms);
    // 2차원 배열 객체로 만들기
    const termsObj = termsArr.reduce((acc,cur)=>{
        return { ...acc ,  [cur[0]] : cur[1] };
    },{})
    const privaciesArr = make2DimensionArray(privacies);
    
    privaciesArr.forEach((privacy,idx)=>{
        const compare = compareTodayTerms(today,privacy[0],termsObj[privacy[1]]);
        if(compare){
            answer.push(idx+1);
        }
    })
    
    return answer;
}