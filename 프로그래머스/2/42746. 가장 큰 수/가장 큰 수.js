/*
     0 <= numbers <= 1000
     1 <= numbers.lengths <= 100,00
     
    a,b가 있다면 StringA, StringB를 합쳐 각각 문자열을 비교해본다.
    ex) '102', '30' => '30102' > '10230;
    
    예외: 0으로만 이루어진 경우 0 반환
    [0,0,0] => 0
*/

function compareTwoStrings(a,b){
    // 각자 문자열로 전환해 합쳐본 뒤 크기 비교
    const stringAToB = String(a).concat(b);
    const stringBToA = String(b).concat(a);
    if(stringAToB > stringBToA){
        return -1;
    }
    else{
        return 1;
    }
}

function solution(numbers) {
    const answer = numbers.sort((a,b)=>compareTwoStrings(a,b)).join('');
    return Number(answer)===0? "0" : answer;

}