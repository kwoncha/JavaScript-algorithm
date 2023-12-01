function solution(id_list, report, k) {
  const answer = Array(id_list.length).fill(0);
  const newReport = new Set(report);
  const result = new Map(id_list.map(value => [value, 0]));

  newReport.forEach(value => {
    const [snitch, guilt] = value.split(' ');
    const newResult = result.get(guilt);

    result.set(guilt, newResult + 1);
  });

  newReport.forEach(value => {
    const [snitch, guilt] = value.split(' ');
    const idx = id_list.indexOf(snitch);

    if (result.get(guilt) >= k) answer[idx] += 1;
  });

  return answer;
}
