// #46

// Given a collection of distinct integers, return all possible permutations.

const permute = nums => {
  if (!nums.length) return [];
  if (nums.length === 1) return nums;

  const result = [];

  // const findPermutation = (visited = new Set(), current = []) => {
  //   if (current.length === nums.length) {
  //     result.push(current);
  //     return;
  //   }
  
  //   for (let i = 0; i < nums.length; ++i) {
  //     if (!visited.has(i)) {
  //       findPermutation(new Set([...visited, i]), [...current, nums[i]]);
  //     }
  //   }
  // }

  // findPermutation();
  return result;
}

export default permute;