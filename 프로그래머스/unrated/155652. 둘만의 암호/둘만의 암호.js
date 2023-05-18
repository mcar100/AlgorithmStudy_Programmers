function solution(s, skip, index) {
  let answer = "";

  const regex = new RegExp(`[^${skip}]`, "g");
  const alpabet = "abcdefghijklmnopqrstuvwxyz".match(regex);

  for (const c of s) {
    const idx = alpabet.indexOf(c) + index;

    answer += alpabet[idx % alpabet.length];
  }
  return answer;
}
