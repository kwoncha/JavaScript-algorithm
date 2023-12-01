function solution(name, yearning, photo) {
  const answer = [];
  const newName = new Map(name.map((key, idx) => [key, yearning[idx]]));

  photo.forEach(value => {
    let count = 0;
    for (let i = 0; i < value.length; i += 1) {
      if (newName.has(value[i])) count += newName.get(value[i]);
      if (i === value.length - 1) answer.push(count);
    }
  });

  return answer;
}
