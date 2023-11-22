// 1 내가푼 문제
function solution(N, road, K) {
  let answer = 0;
  const arr = new Array(N + 1);
  for (let i = 1; i <= N; i++) {
    arr[i] = [];
  }

  for (const i of road) {
    const [a, b, c] = i;
    arr[a].push([b, c]);
    arr[b].push([a, c]);
  }

  const result = dijkstra(1, arr);
  for (const i of result) {
    if (i <= K) {
      answer++;
    }
  }

  return answer;
}

function dijkstra(start, arr) {
  const INF = 1e9;
  const result = Array(arr.length).fill(INF); // 결과 배열, 초기값은 무한대로 설정
  const q = [];

  result[start] = 0;

  q.push([0, start]);

  while (q.length > 0) {
    const [dist, now] = q.shift(); // 우선순위 큐에서 최단 거리 노드 꺼내기

    if (result[now] < dist) {
      continue;
    }

    for (const [nextNode, cost] of arr[now]) {
      const newDist = dist + cost;

      if (newDist < result[nextNode]) {
        result[nextNode] = newDist;
        q.push([newDist, nextNode]);
      }
    }
  }

  return result;
}

// 2 내가 푼 문제에서 최적화한 다른 사람의 풀기
function solution(N, road, K) {
  const totalDist = Array(N + 1).fill(Infinity);
  totalDist[1] = 0;

  const adj = Array.from({ length: N + 1 }, () => []);
  road.forEach(([a, b, c]) => {
    adj[a].push({ to: b, dist: c });
    adj[b].push({ to: a, dist: c });
  });

  const priorityQueue = [{ to: 1, dist: 0 }];

  while (priorityQueue.length) {
    priorityQueue.sort((a, b) => a.dist - b.dist); // PriorityQueue 활용
    let { to, dist } = priorityQueue.shift();

    if (dist > totalDist[to]) continue;

    adj[to].forEach((step) => {
      if (totalDist[step.to] > totalDist[to] + step.dist) {
        totalDist[step.to] = totalDist[to] + step.dist;
        priorityQueue.push(step);
      }
    });
  }

  return totalDist.filter((dist) => dist <= K).length;
}
