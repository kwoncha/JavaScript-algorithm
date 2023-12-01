function solution(keymap, targets) {
  const minKeyTried = {};

  keymap.forEach(key => {
    key.split('').map((str, idx) => {
      if (minKeyTried[str] === undefined) {
        minKeyTried[str] = idx + 1;
      } else {
        minKeyTried[str] = Math.min(minKeyTried[str], idx + 1);
      }
    });
  });

  const answer = targets.map(target => {
    let sum = 0;
    let isSearch = true;
    target.split('').forEach(str => {
      if (minKeyTried[str] === undefined) {
        isSearch = false;
      } else {
        sum += minKeyTried[str];
      }
    });
    return isSearch ? sum : -1;
  });

  return answer;
}
