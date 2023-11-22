function solution(n) {
  const row = new Array(n).fill(0);
  const answer = dfs(0, row, n);
  return answer;
}

function check(x, row) {
  for (let i = 0; i < x; i++) {
    if (row[x] === row[i] || Math.abs(row[x] - row[i]) === x - i) {
      return false;
    }
  }
  return true;
}

function dfs(x, row, n) {
  if (x === n) {
    return 1;
  } else {
    let answer = 0;
    for (let i = 0; i < n; i++) {
      row[x] = i;
      if (check(x, row)) {
        answer += dfs(x + 1, row, n);
      }
    }
    return answer;
  }
}
