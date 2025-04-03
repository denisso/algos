[2182. Construct String With Repeat Limit](https://leetcode.com/problems/construct-string-with-repeat-limit/description/)

# Complexity
- Time complexity: nlogn

- Space complexity: n

# Code
```javascript []
var repeatLimitedString = function (s, repeatLimit) {
  const d = {};
  let ans = "",
    prev,
    l = 0,
    r = 0;
  for (const c of s) d[c] = (d[c] ?? 0) + 1;
  const sorted = Object.keys(d).sort((a, b) => b.localeCompare(a));
  prev = sorted[0];
  const n = sorted.length;
  while (r < n) {
    let k, c;

    if (!ans || !d[sorted[l]] || (d[sorted[l]] && prev != sorted[l])) {
      if (d[sorted[l]]) {
        if (l == r) r++;
      } else {
        l = r;
        r++;
      }
      if (l == sorted.length) break;
      (k = repeatLimit), (c = sorted[l]), (prev = sorted[l]);
    } else {
      if (!d[sorted[r]]) r++;
      if (r >= sorted.length) break;
      (k = 1), (c = sorted[r]), (prev = sorted[r]);
    }
    while (k--) {
      if (!d[c]) break;
      d[c]--;
      ans += c;
    }
  }
  return ans;
};

```
