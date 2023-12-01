function solution(clothes) {
  const clotheTypes = {};
  clothes.forEach(([_, kind]) => {
    if (!clotheTypes[kind]) {
      clotheTypes[kind] = 1;
    } else {
      clotheTypes[kind]++;
    }
  });

  let answer = 1;
  Object.values(clotheTypes).forEach(count => {
    answer *= (count + 1);
  });

  return answer - 1;
}