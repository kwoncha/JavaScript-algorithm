function solution(rows, columns, queries) {
  const arr = [...Array(rows)].map((_, r) => [...Array(columns)].map((_, c) => r * columns + c + 1));
  const mins = [];

  queries.map(query => {
    const [x1, y1, x2, y2] = query.map(i => i - 1);
    let min = arr[x1][y1], tmp = arr[x1][y1];

    for (let i = x1; i < x2; i++) {
      arr[i][y1] = arr[i + 1][y1];
      min = Math.min(min, arr[i][y1]);
    }
    for (let i = y1; i < y2; i++) {
      arr[x2][i] = arr[x2][i + 1];
      min = Math.min(min, arr[x2][i]);
    }
    for (let i = x2; i > x1; i--) {
      arr[i][y2] = arr[i - 1][y2];
      min = Math.min(min, arr[i][y2]);
    }
    for (let i = y2; i > y1; i--) {
      arr[x1][i] = arr[x1][i - 1];
      min = Math.min(min, arr[x1][i]);
    }
    arr[x1][y1 + 1] = tmp;

    mins.push(min);
  })

  return mins;
}