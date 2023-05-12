function solution(a, b, n) { 
    let count = 0;
    let emptyCola = n;
    let newCola = 0;
    while(emptyCola>=a){
        newCola = Math.floor(emptyCola/a)*b;
        count += newCola;
        emptyCola = (emptyCola%a)+newCola;
    }
    return count;
}