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
  const endIndex = nums.length - 1;
  if (nums[endIndex] !== 9) {
    nums[endIndex] = nums[endIndex] + 1;
  } else {
    for (let i = endIndex; i >= 0; --i) {
      nums[i] = 0;
      if (nums[i - 1] !== 9 && nums[i - 1] !== undefined) {
        nums[i - 1] = nums[i - 1] + 1;
        break;
      } else if (nums[i - 1] === undefined) {
        nums.unshift(1);
      }
    }
  }

  return nums;
}

export default plusOne

// big O of n