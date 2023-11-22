// 1 처음 푼 방법
function solution(dirs) {
  var answer = 0;
  const result = [0, 0];
  const save = new Set();

  for (let dir of dirs) {
    const prev = [...result];
    if (dir === 'U' && result[1] < 5) result[1] += 1;
    if (dir === 'D' && result[1] > -5) result[1] -= 1;
    if (dir === 'R' && result[0] < 5) result[0] += 1;
    if (dir === 'L' && result[0] > -5) result[0] -= 1;
    // 파이썬 처럼 값을 비교하는 줄 암, 메모리 비교로 result !== prev로 하면 안됨
    if (result !== prev && !save.has(prev.join() + ',' + result.join() + ',' + result.join() + ',' + prev.join())) {
      save.add(prev.join() + ',' + result.join() + ',' + result.join() + ',' + prev.join());
    }
  }
  return Math.floor(save.size / 2);
}

// 결과 도달
function solution(dirs) {
  var answer = 0;
  const result = [0, 0];
  const save = new Map();

  for (let dir of dirs) {
    const prev = [...result];
    if (dir === 'U' && result[1] < 5) result[1] += 1;
    if (dir === 'D' && result[1] > -5) result[1] -= 1;
    if (dir === 'R' && result[0] < 5) result[0] += 1;
    if (dir === 'L' && result[0] > -5) result[0] -= 1;

    if (!isArraysEqual(result, prev) && !save.has(generateKey(prev, result))) {
      save.set(generateKey(prev, result));
      save.set(generateKey(result, prev));
      answer += 1;
    }
  }
  return answer;
}

function isArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function generateKey(arr1, arr2) {
  return arr1.join() + ',' + arr2.join();
}