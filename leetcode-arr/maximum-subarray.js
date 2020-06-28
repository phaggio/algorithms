// Given an integer array nums, 
// find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const maxSubarray = nums => {
  let max = nums[0];
  let localMax = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    localMax = localMax + nums[i];
    if (nums[i] > localMax) localMax = nums[i];
    if (localMax > max) max = localMax;
  }
  return max;
}

export default maxSubarray



// kadane's algo
// big O of n