/*
    1. 들어왔다 나갔다가 표기 된다. Enter-id-nickname / Leave-id
    2. 나갔다가 닉네임을 바꾸고 들어올 수 있다. 
        ex) Enter-user1-nickname1 -> Leave-user1-nickname1 -> Enter-user1-nickname2
        2-1. 나갔다 들어오면 기존의 닉네임도 모두 바뀐다.
            ex) Enter-user1-nickname2 -> Leave-user1-nickname2 -> Enter-user1-nickname2
    3. 채팅방에 있는 동안에도 닉네임을 바꿀수 있다.
        ex) Enter-user1-nickname1 -> Change-user1-nickname2
        3-1. 닉네임을 바꾸면 기존의 닉네임도 바뀐다.
            ex) Enter-user1-nickname2 -> Change-user1-nickname2
    
*/

const ENTER_TEXT = '님이 들어왔습니다.'
const LEAVE_TEXT = '님이 나갔습니다.'

function solution(record) {
    const textList = [];
    const nickNameList = {};    

    record.forEach((r)=>{
        const [ state, userID, nickname ] = r.split(' ');
        if(state === 'Enter'){
            nickNameList[userID] = nickname;
            textList.push([userID,ENTER_TEXT]);   
        }
        else if(state==='Leave'){
            textList.push([userID,LEAVE_TEXT]);  
        }
        else if(state==='Change'){
            nickNameList[userID] = nickname;
        }
        
    })

    return textList.map(text=> nickNameList[text[0]]+text[1]);
}