function solution(food) {
    let answer = ''

    for(let i=1; i<food.length; i++){
        let f = food[i];
        if(f%2){
            f -= 1
        }
        let plus = String(i).repeat(f/2);
        answer += plus
    }

    return answer + '0' + answer.split('').reverse().join('');
}