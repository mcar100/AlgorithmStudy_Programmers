// 길이가 1인 사전 (알파벳 사전)
function makeDictionary(){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.split('').reduce((acc,cur,idx)=>{
        return {...acc, [cur]: idx+1 }
    },{});
}

function solution(msg) {
    const dic = makeDictionary();
    const message = msg.split('');
    const answers = [];
    let findIdx=0;
    let length = 1;
    
    while(message.length>0){
        let w = message.slice(0,length).join('');
        if(length>message.length){
            answers.push(dic[w]);
            break;
        }
        
        if(dic[w]!==undefined){
            findIdx = dic[w];
            length++;
        }
        else{
            answers.push(findIdx);
            dic[w]=Object.keys(dic).length+1;
            message.splice(0,length-1);
            length=1;
            findIdx=0;
        }
    }
    
    return answers
}