/*

*/

function dfs(){
    
    
}

function solution(word) {
    const dic = ['A','E','I','O','U'];
    // 모든 경우의 수를 담을 배열
    const answer = []
    
    function dfs(length, str){
        if(length===0){
            answer.push(str);
            return;
        }
        // 모든 원소에 대하여 dfs 실행 (중복 허용)
        for(let i=0; i<dic.length; i++){
            dfs(length-1,str+dic[i]);
        }
    }
    
    // 문자열 길이 1부터 5까지 dfs실행
    for(let i=0; i<dic.length; i++){
        dfs(i+1,'');   
    }

    // 정렬 방식은 sort와 동일, 0부터 시작하므로 index+1
    return answer.sort().findIndex((el)=>el===word)+1;
}