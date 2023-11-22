function solution(skill, skill_trees) {
  let answer = 0;
  for (let ski of skill_trees) {
    const num = [];

    for (let i of ski) {
      if (skill.includes(i)) num.push(i)
    }

    if (num.join('') === skill.slice(0, num.length)) {
      answer += 1;
    }
  }
  return answer;
}