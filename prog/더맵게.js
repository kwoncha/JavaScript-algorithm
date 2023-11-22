class Heap {
  constructor() {
    this.items = [];
  }

  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1],
    ];
  }

  insert(val) {
    this.items.push(val);
    let index = this.items.length - 1;
    while (true) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.items[index] < this.items[parentIndex]) {
        this.swap(index, parentIndex);
      } else break;
      index = parentIndex;
      if (index < 1) break;
    }
  }

  removeMin() {
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    if (this.items.length <= 1) return
  }
  constructor() {
    this.items = [];
  }

  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1],
    ];
  }

  insert(val) {
    this.items.push(val);
    let index = this.items.length - 1;
    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.items[index] < this.items[parentIndex]) {
        this.swap(index, parentIndex);
      } else break;
      index = parentIndex;
      if (index < 1) break;
    }
  }

  removeMin() {
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    if (this.items.length <= 1) return;

    let index = 0;
    while (true) {
      //두 자식중 작은값의 자식 인덱스 찾기
      let lChildIndex = index * 2 + 1;
      let rChildIndex = index * 2 + 2;
      let minIndex = index;
      if (
        lChildIndex < this.items.length &&
        this.items[minIndex] > this.items[lChildIndex]
      ) {
        minIndex = lChildIndex;
      }
      if (
        rChildIndex < this.items.length &&
        this.items[minIndex] > this.items[rChildIndex]
      ) {
        minIndex = rChildIndex;
      }
      //위치 바꾸기
      if (minIndex !== index) {
        this.swap(index, minIndex);
        index = minIndex;
      } else break;
    }
  }
}

function solution(scoville, K) {
  let answer = 0;

  //힙생성과 scoville 힙에 저장
  let scovilleHeap = new Heap();
  scoville.forEach((el) => {
    scovilleHeap.insert(el);
  });

  //스코빌 지수 설정
  while (true) {
    if (scovilleHeap.items[0] >= K) break;
    if (scovilleHeap.items.length <= 1) {
      answer = -1;
      break;
    }

    const low1 = scovilleHeap.items[0];
    scovilleHeap.removeMin();
    const low2 = scovilleHeap.items[0];
    scovilleHeap.removeMin();
    scovilleHeap.insert(low1 + low2 * 2);

    answer++;
  }

  return answer;
}