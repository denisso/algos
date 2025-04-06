[leetcode](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/description/)

# Complexity
- Time complexity: n
- Space complexity: tree height

# Code
```javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
  const n = traversal.length,
    stack = [new TreeNode(+traversal[0])];

  for (
    let i = 1, dashes = 0, prev = "n", c = traversal[i];
    i < n;
    i++, c = traversal[i]
  ) {
    if (c == "-") {
      if (prev == "n") dashes = 0;
      prev = "d";
      dashes++;
    } else {
      let node;
      if (!stack[dashes] || (stack[dashes] && prev == "d")) {
        node = new TreeNode();
        stack[dashes] = node;
      } else {
        node = stack[dashes];
      }
      node.val = node.val * 10 + +c;
      if (dashes && prev == "d") {
        if (!stack[dashes - 1].left) {
          stack[dashes - 1].left = node;
        } else {
          stack[dashes - 1].right = node;
        }
      }
      prev = "n"
    }
  }
  return stack[0];
};
```
