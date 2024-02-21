/*
    목표: 모든 트럭이 다리를 건너려면 최소 몇 초?
    bridge_length: 다리의 길이 + 올라갈 수 있는 트럭의 수 (1<= bridge_length <=10,000)
    weight: 다리가 버틸 수 있는 최대 무게   (1<= weight <= 10,000)
    truck_weights: 각 트럭의 무게 (1<= truck_weights <= weight)
    
    초 계산이 인정되는 경우
    1) 다리를 지나는 경우 -> 다리의 길이만큼 걸림 (이때 다리에 오르면 이미 1만큼 이동한 걸로 간주)
        ex) 다리의 길이: 2면, 다리를 건너는데 2초 걸림 
    2) 다리에서 내리는 경우 -> 다음 탑승 트럭이 초과 무게로 못 올라오면 내릴 때까지 대기해야함 
        ex) 다리의 무게 10kg, 건너는 트럭 5kg, 대기 트럭 6kg인 경우
            1) 5kg 트럭 건너는 데 2초 소요 
            2) 5kg 트럭 내림과 동시에 6kg 트럭 건너는 데 2초 소요
            3) 6kg 트럭 내림 1초 소요
            => 총 5초 소요
*/

function checkToAddTruck(bridge, bridge_length, bridge_weight, current_weight, entering_truck){
    if(bridge.length >= bridge_length){
        return false;
    }
    if(current_weight+entering_truck > bridge_weight){
        return false;
    }
    return true;
}

function moveTrucks(bridge){
    bridge.forEach(trucks=>trucks[1]++);
}

function solution(bridge_length, weight, truck_weights) {
    const bridge = [];
    let timer = 0;
    let current_weight = 0;
    let truck_index = 0;
    let count_leaving_trucks = 0;
    
    while(count_leaving_trucks<truck_weights.length){
        const entering_truck = truck_weights[truck_index];
        const checkEnter = checkToAddTruck(bridge, bridge_length, weight, current_weight, entering_truck);
        if(checkEnter){
            bridge.push([entering_truck,0]);
            truck_index++;
            current_weight += entering_truck;
        }
        moveTrucks(bridge);
        if(bridge[0][1]===bridge_length){
            const leaving_truck = bridge.shift();
            current_weight -= leaving_truck[0];
            count_leaving_trucks++;
        }
        timer++;
        
    }
    
    // 마지막 트럭 떠나기
    return timer+1;
}