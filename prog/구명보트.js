function solution(people, limit) {
  let left = 0;
  let right = people.length - 1;
  let answer = 0;

  people.sort((a, b) => a - b);

  while (left < right) {
    if (people[left] + people[right] <= limit) {
      left += 1;
      right -= 1;
      answer += 1;
      continue;
    }

    right -= 1;
  }

  return answer + people.length - 2 * answer;
}
