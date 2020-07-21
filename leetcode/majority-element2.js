// #229

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Note: The algorithm should run in linear time and in O(1) space.

// Examples

// Input: [3,2,3]
// Output: [3]

// Input: [1,1,1,3,3,2,2,2]
// Output: [1,2]

const majorityElement = nums => {
  let majority = Math.floor(nums.length / 3) + 1;
  let map = {};
  let output = [];
  
  for (const num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
    if (map[num] === majority) output.push(num);
    if (output.length === 2) break;
  }
  return output;
}

export default majorityElement