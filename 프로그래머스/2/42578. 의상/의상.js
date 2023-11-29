function makeClassfiedArray(array){
    const classifiedMap = new Map();
    const classifiedArray = [];
    // 옷을 종류별로 분리
    array.map(element=>{
        const findMap = classifiedMap.get(element[1]);
        if(findMap){
            classifiedMap.set(element[1],findMap+1)
        }
        else{
            classifiedMap.set(element[1],1)
        }
    })
    // map -> array
    classifiedMap.forEach((value,key)=>{
        classifiedArray.push(value);
    });
    
    return classifiedArray;
}

function solution(clothes) {
    let combination = 1;
    const clothArray = makeClassfiedArray(clothes);
    if(clothArray.length===1){
        return clothArray[0];
    }

    clothArray.forEach(num=>{
        combination*=num+1;
    })    
    return combination-1;
}
