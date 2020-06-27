// Given a sorted array and a target value, 
// return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

const searchInsertPosition = (nums, target) => {
  if (target === 0) return 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === target) return i;
    if (nums[i] > target) return i;
  }
  return nums.length;
}

export default searchInsertPosition