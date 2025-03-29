# Intuition
Cycle sort

# Approach
Cycle sort like in problem [41. First Missing Positive ](https://leetcode.com/problems/first-missing-positive/editorial/#approach-3-cycle-sort)

Attention! This solution mutates the source array.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length,
    n2 = n * n;
  let indx = 0;
  while (indx < n2) {
    const i = ~~(indx / n),
      j = indx % n,
      num = grid[i][j] - 1;
    // already good
    if (num == indx) {
      indx++;
      continue;
    }
    const di = ~~(num / n),
      dj = num % n;
    // same number
    if (grid[di][dj] == grid[i][j]) {
      indx++;
      continue;
    }
    [grid[i][j], grid[di][dj]] = [grid[di][dj], grid[i][j]];
  }
  let ans;
  indx = 0;
  while (indx < n2) {
    const num = grid[~~(indx / n)][indx % n] - 1;
    if (indx != num) {
      ans = [num, indx];
      break;
    }
    indx++;
  }
  return ans;
};
```
