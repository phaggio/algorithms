// #169

// Given an array of size n, find the majority element. 
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Examples

// Input: [3,2,3]
// Output: 3

// Input: [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = nums => {
  let majority = Math.ceil(nums.length / 2);
  let map = {};

  for (const num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
    if (map[num] === majority) return num;
  }
}

export default majorityElement