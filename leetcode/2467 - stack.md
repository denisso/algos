[2467. Most Profitable Path in a Tree](https://leetcode.com/problems/most-profitable-path-in-a-tree/description/)

# Intuition
store Bob's path in an array(bpa), and use this array to determine Alice's net income

main idea
```
    let p = stack.pop(), // Alice node
      cs = sum.pop(), // current income
      l = length[p], // the length of the path traveled by Alice
      bpi = bpl - l; // bpa[bpi] == p and bpi >= 0 helps to determine whether Alice is on Bob's path or not
      // bpa[l - 1] Bob node
    if (bpi >= 0 && bpa[bpi] == p && l > bpl / 2) {
      if (bpa[l - 1] == p) {
        cs += amount[p] / 2;
      }
    } else {
      cs += amount[p];
    }
```

# Complexity
- Time complexity:n
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:n
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
  const n = amount.length,
    tree = new Array(n).fill(null);

  for (const edge of edges) {
    if (!tree[edge[0]]) tree[edge[0]] = [];
    tree[edge[0]].push(edge[1]);
    if (!tree[edge[1]]) tree[edge[1]] = [];
    tree[edge[1]].push(edge[0]);
  }

  let stack = [0];
  const parents = new Array(n).fill(-1),
    length = new Array(n).fill(1);
  while (stack.length) {
    const p = stack.pop();
    for (const c of tree[p] ?? []) {
      if (c == parents[p]) continue;
      parents[c] = p;
      length[c] = length[p] + 1;
      stack.push(c);
    }
  }
  const bpa = [bob];
  let parent = parents[bob];
  while (parent >= 0) {
    bpa.push(parent);
    parent = parents[parent];
  }
  let ans = -Infinity,
    sum = [0],
    bpl = bpa.length;
  stack = [0];

  while (stack.length) {
    let p = stack.pop(),
      cs = sum.pop(),
      l = length[p],
      bpi = bpl - l;
    if (bpi >= 0 && bpa[bpi] == p && l > bpl / 2) {
      if (bpa[l - 1] == p) {
        cs += amount[p] / 2;
      }
    } else {
      cs += amount[p];
    }
    if (tree[p].length == 1 && p) {
      // leaf
      if (cs > ans) ans = cs;
      continue;
    }
    for (const c of tree[p]) {
      if (c == parents[p]) continue;
      stack.push(c);
      sum.push(cs);
    }
  }
  return ans;
};
```
