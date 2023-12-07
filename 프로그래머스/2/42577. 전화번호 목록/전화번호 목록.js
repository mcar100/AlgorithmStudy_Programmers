// // 내 방식: 효율성 3,4 실패
// // 11 110 123 1234 134 21 231 2321 233 ....
// // 접두어면 항상 맨 앞이라는 의미
// // 점점 길이가 길어지면 뒤에 것과 접두어로 매칭되지 않으니 패스

// function solution(phone_book) {
//     // 사전 순 정렬 
//     phone_book.sort();
//     for(let i=0; i<phone_book.length-1; i++){
//         const fixed = phone_book[i];
//         for(let j=i+1; j<phone_book.length; j++){
//             if(fixed.length>phone_book[j].length){
//                 continue;
//             }
//             if(phone_book[j].startsWith(fixed)){
//                 return false;
//             }
//         }
//     }      
//     return true;
// }

// // 상대방의 방식: 통과
function solution(phoneBook) {
    const table = {};

    for (const number of phoneBook) {
        table[number] = true;
    };

    for (const number of phoneBook) {
        for (let i = 1; i < number.length; i += 1) {
            const prefix = number.slice(0, i);
            if (table[prefix]) return false;
        };
    };
    return true;
}