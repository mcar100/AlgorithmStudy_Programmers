function solution(cards1, cards2, goal) {
    let answer = ''
    for(let i=0; i<goal.length; i++){
        answer = 'Yes';
        if(cards1[0]===goal[i]){
            console.log('Yes');
            cards1.shift();
        }
        else if(cards2[0]===goal[i]){
            console.log('Yes');
            cards2.shift();
        }
        else{
            console.log('No');
            answer = 'No';
            break;
        }
    }
    return answer;
}