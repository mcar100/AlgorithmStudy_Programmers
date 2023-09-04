/* 풀이 참고 */
function solution(n)
{
    let batteryUsage = 0;
    
    while(n>0){             
        if(n%2===0){            // 2로 나눌수 있을 때는 순간이동
            n /= 2;
        }
        else{                   // 안될 때는 한 칸 이동
            n--;
            batteryUsage++;
        }
    }
    
    return batteryUsage;
}