function solution(new_id) {
    const lv1 = new_id.toLowerCase();
    let lv2 = []
    for(let i=0; i<lv1.length; i++){
        let char = lv1.charCodeAt(i); 
        if(char<123&&char>96){
            lv2.push(lv1[i]);
        }
        else if(char<58&&char>47){
            lv2.push(lv1[i]);
        }
        else if(char===46||char===45||char===95){
            lv2.push(lv1[i]);
        }
    }
    lv2 = lv2.join('')
    const lv3 = lv2.replace(/\.+/g,'.');
    const lv4 = lv3.replace(/^\.|\.$/g,'');
    const lv5 = lv4.length===0? 'a' : lv4;
    const lv6 = lv5.length > 15? lv5.slice(0,15).replace(/\.$/,'') : lv5;
    let lv7 = lv6;
    if(lv6.length<3){
        let lastChar = [...lv6].pop().repeat(3-lv6.length)
        lv7 += lastChar
    }
    
    
    return lv7;

}