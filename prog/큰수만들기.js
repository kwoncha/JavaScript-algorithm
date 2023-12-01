function solution(number, k) {
  const result = [];
  for (let i = 0; i < number.length; i++) {
    const current = number[i];

    while (result.length && result[result.length - 1] < current && k > 0) {
      k -= 1;
      result.pop();
    }

    result.push(current);
  }

  if (k != 0) {
    result.splice(-k, k);
  }

  return result.join('');
}
