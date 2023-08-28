function make2DimensionArray(array){
    const newArray = [];
    array.forEach(e=>newArray.push(e.split(' ')));
    return newArray;
}

function compareTodayTerms(today, privacy, term){
    const todayDate = new Date(today);
    const privacyDate = new Date (privacy);
    privacyDate.setUTCMonth(privacyDate.getUTCMonth()+Number(term));
    return privacyDate <= todayDate? true:false;
}

function solution(today, terms, privacies) {
    const answer = [];
    const termsArr = make2DimensionArray(terms);
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