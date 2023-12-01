function solution(wallpaper) {
  let minX = wallpaper[0].length;
  let maxX = 0;
  let minY = wallpaper.length;
  let maxY = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        if (minX >= j) minX = j;
        if (maxX <= j) maxX = j;
        if (minY >= i) minY = i;
        if (maxY <= i) maxY = i;
      }
    }
  }

  return [minY, minX, maxY + 1, maxX + 1];
}
