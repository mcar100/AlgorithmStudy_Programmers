/*
    J(A,B) = AnB / AuB
    if A and B = {} = J(A,B) = 0

*/

// 2자리 문자열 배열로 반환
function makeTwoLetterArray(array){
    // 영문자인지 판별할 정규식
    const regex = /^[a-zA-Z]+$/;
    return array.split('')
        .map((str,idx,origin)=>{
            if(idx < array.length-1){
                return (str+origin[idx+1]).toUpperCase();
            }
            else{
                return 0;
            }
        })
        .filter(str=>regex.test(str));
}

// 자카드 유사도 구하기
function getJaccardSimilarity(str1, str2){
    if(str1.length===0&&str2.length===0){
        return 65536;
    }
    const combine = getCombine(str1, str2);
    const union = getUnion(str1, str2, combine);   
    
    return Math.floor(combine.length / union.length * 65536)
}

// 교집합 구하기: AnB
function getCombine(str1, str2){
    const combine = [];
    const str2Temp = [...str2];
    str1.forEach((str)=>{
        const index = str2Temp.findIndex(str2=>str===str2);
        if(index!==-1){
            combine.push(...str2Temp.splice(index,1));   
        }
    }) 
    return combine;
}

// 합집합 구하기: A+B-AnB
function getUnion(str1, str2, combine){
    const union = [...str1, ...str2];
    combine.forEach(c=>{
        const index = union.findIndex(u=>u===c);
        union.splice(index, 1);
    });
    return union;
}

function solution(str1, str2) {
    const str1Array = makeTwoLetterArray(str1);
    const str2Array = makeTwoLetterArray(str2);
    
    const jaccardSimilarity = getJaccardSimilarity(str1Array,str2Array);
    return jaccardSimilarity;
}