[670. Maximum Swap](https://leetcode.com/problems/maximum-swap/description/)

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  let max = 0, pos = 0, first = 0, num1 = num, n = 0, ans = num
  while(num1){
    first = num1 % 10;
    if(first > max) {
        pos = n;
        max = first
    }
    if(max > first){
      ans = num
      ans = ans - (first - max) * (10 ** n)
      ans = ans - (max - first) * (10 ** pos)
    }
    num1 = Math.floor(num1 / 10)
    n++
  }

  return ans
};
```
