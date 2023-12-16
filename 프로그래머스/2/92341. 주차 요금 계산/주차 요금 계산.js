// 시:분을 분으로 전환하여 시간 차 계산
function calculateTimeDifference(out_time, in_time) {
  const out_minutes = out_time
    .split(":")
    .reduce(
      (acc, cur, idx) =>
        idx === 0 ? (acc += Number(cur) * 60) : (acc += Number(cur)),
      0
    );
  const in_minutes = in_time
    .split(":")
    .reduce(
      (acc, cur, idx) =>
        idx === 0 ? (acc += Number(cur) * 60) : (acc += Number(cur)),
      0
    );
  return out_minutes - in_minutes;
}

// 시간에 따른 비용 계산;
function calculateFee(fees, time) {
  const [basic_time, basic_fee, unit_time, unit_fee] = fees;
  if (time > basic_time) {
    const left_time = time - basic_time;
    return basic_fee + Math.ceil(left_time / unit_time) * unit_fee;
  } else {
    return basic_fee;
  }
}

function solution(fees, records) {
  const answer = [];
  // 입차 기록 배열
  const in_records = records
    .filter((el) => el.includes("IN"))
    .map((el) => el.slice(0, -3));

  // 출차 기록 배열
  const out_records = records
    .filter((el) => el.includes("OUT"))
    .map((el) => el.slice(0, -4));

  // 차량 번호와 사용시간을 담는 배열
  const time_table = [];

  // 차량 번호별 사용 시간 계산
  in_records.forEach((str) => {
    let time_diff = 0;
    const [in_time_line, car_number] = str.split(" ");
    const out_record_index = out_records.findIndex((el) =>
      el.includes(car_number)
    );
    if (out_record_index !== -1) {
      const out_time_line = out_records[out_record_index].split(" ")[0];
      time_diff = calculateTimeDifference(out_time_line, in_time_line);
      out_records.splice(out_record_index, 1);
    } else {
      time_diff = calculateTimeDifference("23:59", in_time_line);
    }

    // 중복 기록된 차량 구별하여 차량 번호별 사용 시간 저장
    const car_number_index = time_table.findIndex((el) => el[0] === car_number);
    if (car_number_index === -1) {
      time_table.push([car_number, time_diff]);
    } else {
      time_table[car_number_index][1] += time_diff;
    }
  });

  // 차량 번호별 사용 시간에 따른 비용 계산
  time_table.forEach((str) => {
    const fee = calculateFee(fees, str[1]);
    answer.push([str[0], fee]);
  });

  // 차량 번호 순 정렬 후 비용만 리턴
  return answer.sort((a, b) => a[0] - b[0]).map((el) => el[1]);
}