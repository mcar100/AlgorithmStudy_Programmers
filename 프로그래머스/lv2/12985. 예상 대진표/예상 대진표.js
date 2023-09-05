// n: 대회 참여 인원
// a, b: 특정 번호 참가자 -> 둘이 몇 번째 라운드에서 만나는가?

// 8명일 경우 총 몇 라운드로 진행되는가?
// 2^3 승이므로 3번
// n명일 경우 총 몇 라운드를 하는가?
// n.length-1 라운드

/* 4번과 7번은 몇 번째 라운드에서 만나는가?
   3,4 -> 1,4 
   7,8 -> 5,7 -> 4,7
   총 3 라운드
   
*/
function solution(n,a,b)
{
    let answer = 0;
    const numberOfMatches = n.toString(2).length - 1 ;
    let groupOfA = Math.ceil(a/2); //5그룹 -> 3그룹 -> 2그룹
    let groupOfB = Math.ceil(b/2); //8그룹 -> 4그룹 -> 2그룹 -> 1그룹
    
    while(groupOfA !== groupOfB){
        
        if(groupOfA>1){
            groupOfA = Math.ceil(groupOfA/2);            
        }
        
        if(groupOfB>1){
            groupOfB = Math.ceil(groupOfB/2);            
        }
        answer++;
    }



    return answer+1;
}