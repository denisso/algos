[921. Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/)

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0, close = 0;  

    for (let char of s) {
        if (char === '(') {
            open++;
        } else if (char === ')') {
            if (open > 0) {
                open--;  
            } else {
                close++; 
            }
        }
    }

    return open + close;
};
```
