# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
var maximumSetSize = function (nums1, nums2) {
  const d1 = new Set(nums1),
    d2 = new Set(nums2);
  let eq = 0;

  for (const element of d1) if (d2.has(element)) eq++;

  let [len1, len2] =
    d1.size < d2.size ? [d1.size, d2.size] : [d2.size, d1.size];

  const halfLength = nums1.length / 2;

  return (
    Math.min(
      len2 - Math.max(0, eq - Math.max(0, len1 - halfLength)),
      halfLength
    ) + Math.min(len1, halfLength)
  );
};
```
