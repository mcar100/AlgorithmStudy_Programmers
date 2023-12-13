// 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p
/*
2진법의 경우
0 1 10 11 100 101 110 111 1000 1001 1010 1011 1100 1101 1111 ...
 -> 01101110010111011110001001101010111110011011111...

16진법의 경우
0 1 2 3 4 5 6 7 8 9 A B C D E F 10 11 12 13 14 15 16 17 18 19 ... 
  -> 0123456789ABCDEF101112131415161718191A1B1C1D1E...
*/

// 최대 길이까지 n진수 나열 문자열 생성
function makeBinaryString(maxLength, binary) {
  let binaryString = "";
  for (let i = 0; i < maxLength; i++) {
    if (binaryString.length > maxLength) {
      break;
    }
    binaryString += i.toString(binary).toUpperCase();
  }
  return binaryString;
}

// idx+1번째 인덱스가 내 순서와 일치하면 추가
function getMyBinaryString(binaryString, m, p) {
  let myBinaryString = "";
  binaryString.split("").forEach((str, idx) => {
    if ((idx + 1) % m === p) {
      myBinaryString += str;
    }
  });
  return myBinaryString;
}

function solution(n, t, m, p) {
  let answers = "";
  const maxLength = t * m;
  const binaryString = makeBinaryString(maxLength, n);
  if (m === p) {
    // m으로 나누어 떨어지면 p번째
    answers = getMyBinaryString(binaryString, m, 0);
  } else {
    answers = getMyBinaryString(binaryString, m, p);
  }

  return answers.slice(0, t);
}