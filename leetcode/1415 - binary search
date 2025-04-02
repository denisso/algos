[Problem](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/description/)

# Complexity
- Time complexity: n
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 1
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
const getChar = (char, pos) => {
  if (char == "a") {
      return pos ? "c" : "b";
  }
  else if (char == "b") {
      return pos ? "c" : "a";
  }
  return pos ? "b" : "a"
}
/**
* @param {number} n
* @param {number} k
* @return {string}
*/
var getHappyString = function (n, k) {
  let s = "", l = 1, r = 3 * Math.pow(2, n - 1)
  if (k > r) return s;
  if (r / 3 >= k) { s = "a"; r = r / 3 }
  else if (r / 3 * 2 >= k) { s = "b"; l = r / 3 + 1; r = r / 3 * 2 }
  else { s = "c"; l = r / 3 * 2 + 1; }

  for (let i = 1; i < n; i++) {
      if (k >= l && k < l + (r - l + 1) / 2) {
          r -= (r - l + 1) / 2
          s += getChar(s[i - 1], 0)
      }
      else {
          l += (r - l + 1) / 2
          s += getChar(s[i - 1], 1)
      }
  }
  return s
};
```
