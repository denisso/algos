# Complexity
- Time complexity: nlogn
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: n
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
    const n = nums.length;
    const indxs = Array.from({ length: n }, (_, i) => i),
        visited = new Array(n).fill(false);
    indxs.sort((a, b) => nums[a] === nums[b] ? a - b : nums[a] - nums[b]);

    let scores = 0;
    for (let i = 0; i < n; i++) {
        if (visited[indxs[i]]) continue;
        scores += nums[indxs[i]];
        if (indxs[i] - 1 >= 0) visited[indxs[i] - 1] = true
        if (indxs[i] + 1 < n) visited[indxs[i] + 1] = true
    }
    return scores
};
```
