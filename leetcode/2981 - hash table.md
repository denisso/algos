[2981. Find Longest Special Substring That Occurs Thrice I](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/description/)

# Complexity
- Time complexity: O(n)

- Space complexity:O(n)

# Code
```
var maximumLength = function (s) {
  const n = s.length;
  const d = { [s[0]]: [1] };

  for (let i = 1, prev = s[0]; i < n; i++) {
    if (prev == s[i]) {
      d[s[i]][d[s[i]].length - 1]++;
    }
    if (prev != s[i]) {
      if (!d[s[i]]) d[s[i]] = [];
      d[s[i]].push(1);
    }
    prev = s[i];
  }
  let ans = -1;
  for (const key of Object.keys(d)) {
    const data = d[key];
    data.sort((a, b) => b - a);

    let val = 0,
      max = { val, count: 0 };

    if (data[0] < 3) {
      val = 1;
      max = { val, count: data[0] % 3 };
    } else {
      val = data[0] - 1;
      max = { val, count: 2 };
    }

    for (let i = 1; i < data.length; i++) {
      const e = data[i];
      if (e < max.val || (e == max.val && max.count == 3)) break;
      
      if (e >= max.val && max.count == 3) {
        max.val++;
        break;
      }
      max.count++;
    }
    if (max.val == 1 && max.count < 3) continue;
    const count = max.val - (3 - max.count);
    if (count > ans) ans = count;
  }
  return ans;
};
```
