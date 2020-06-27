// Given an array nums and a value val, 
// remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.

// e.g. nums = [3, 2, 2, 3, 3] val = 3 return 2
// where result array is [2, 2]

const removeElement = (nums, val) => {
  let length = nums.length;
  for (let i = 0; i < length; ++i) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      length--;
      i--;
    }
  }
  return nums.length;
}

export default removeElement

// Big O n