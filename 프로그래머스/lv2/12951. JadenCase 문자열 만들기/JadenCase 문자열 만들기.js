function solution(s) {
    return s.split(" ")
        .map(str=>str.toLowerCase().trim())
        .map(str=>str.charAt(0).toUpperCase()+str.substring(1))
        .join(" ");
    

}