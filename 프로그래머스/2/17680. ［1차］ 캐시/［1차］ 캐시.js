const CACHE_HIT = 1;
const CACHE_MISS = 5;

function pushLRU(array,element,size){
    // 용량 최대치면 맨 앞의 요소 제거 후 데이터 추가
    if(array.length===size){
        array.splice(0,1);
    }
    array.push(element);
}

function updateLRU(array,element,index){
    // 존재하는 데이터를 맨 뒤로 보냄
    array.splice(index,1);
    array.push(element);
}

function solution(cacheSize, cities) {
    let answer = 0;
    // LRU 캐시
    const cacheArray = [];
    
    // 캐시 용량이 0면 모두 cache_miss
    if(cacheSize===0){
        return cities.length*CACHE_MISS
    }
    
    // 입력된 도시 배열 순환
    cities.forEach(city=>{
        // 데이터 찾기
        const upperCity = city.toUpperCase();
        const findCityIndex = cacheArray.findIndex(element=>element === upperCity);
        if(findCityIndex === -1){
            // 못 찾으면 캐시 삽입 및 cache_miss만큼 실행시간 증가
            pushLRU(cacheArray,upperCity,cacheSize);
            answer += CACHE_MISS;   
        }
        else{
            // 찾으면 캐시 업데이트 및 cache_hit만큼 실행시간 증가
            updateLRU(cacheArray,upperCity,findCityIndex);
            answer += CACHE_HIT;    
        }
    })
    
    return answer;
}