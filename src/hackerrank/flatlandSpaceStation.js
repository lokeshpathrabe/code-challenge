//hackerrank.com/challenges/flatland-space-stations

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
  let maxDistance = 0;
  for (let i = 0; i < n; i++) {
    if (c.indexOf(i) === -1) {
      let minDistance = Number.MAX_SAFE_INTEGER;
      c.forEach((item) => {
        const d = Math.abs(item - i);
        if (d < minDistance) {
          minDistance = d;
        }
      });
      if (minDistance > maxDistance) {
        maxDistance = minDistance;
      }
    }
  }
  return maxDistance;
}

console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]));
