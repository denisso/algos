[2658. Maximum Number of Fish in a Grid](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/)
# Complexity
- Time complexity: m * n 

- Space complexity: m * n

# Code
```javascript []
var findMaxFish = function (grid) {
  const n = grid.length,
    m = grid[0].length,
    v = new Uint8Array(Math.ceil(n * m / 8)),
    dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

  let ans = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      const cij = m * i + j;
      if (!grid[i][j] || v[Math.floor(cij / 8)] & (1 << cij % 8)) continue;
      summ = 0;
      const stack = [cij];
      while (stack.length) {
        const nij = stack.pop(),
          ni = Math.floor(nij / m),
          nj = nij % m;
          if( v[Math.floor((ni * m + nj) / 8)] & (1 << (ni * m + nj) % 8)) continue
        v[Math.floor((ni * m + nj) / 8)] |= 1 << (ni * m + nj) % 8;
        summ += grid[ni][nj];
        if (summ > ans) ans = summ;
        for (const dir of dirs) {
          const di = ni + dir[0],
            dj = nj + dir[1];
          if (
            di < 0 ||
            di >= n ||
            dj < 0 ||
            dj >= m ||
            !grid[di][dj] ||
            v[Math.floor((di * m + dj) / 8)] & (1 << (di * m + dj) % 8)
          )
            continue;

          stack.push(di * m + dj);
        }
      }
    }
  return ans;
};
```
