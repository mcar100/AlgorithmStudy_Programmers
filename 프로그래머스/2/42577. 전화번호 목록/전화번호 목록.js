// function solution(phone_book) {
//     let answer = true;
//     // 사전 순 정렬 
//     phone_book.sort();
//     for(let i=0; i<phone_book.length-1; i++){
//         const fixed = phone_book[i];
//         const rest = [...phone_book.slice(i+1)];
//         const index = rest.findIndex(el=>el.includes(fixed));
//         if(index!==-1){
//             answer=false;
//             break;
//         }
//     }   
    
    
//     return answer;
// }

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