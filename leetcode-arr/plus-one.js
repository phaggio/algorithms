// Given a non-empty array of digits representing a non-negative integer, 
// plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, 
// and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Input: [1, 2, 3];
// Output: [1, 2, 4];
// input array represents number 123

// Input: [4, 3, 2, 1];
// Output: [4, 3, 2, 2];
// input array represents number 4321

const plusOne = nums => {
  const index = nums.length - 1;
  nums[index] = nums[index] + 1;
  return nums;
}

export default plusOne