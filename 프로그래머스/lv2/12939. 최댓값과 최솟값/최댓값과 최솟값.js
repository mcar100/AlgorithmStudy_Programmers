function solution(s) {
    const array = s.split(" ").map((n)=>Number(n)).sort((a,b)=>(a-b));
    return `${array[0]} ${array[array.length-1]}`;
}