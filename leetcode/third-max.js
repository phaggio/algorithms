// Given a non-empty array of integers, 
// return the third maximum number in this array. 
// If it does not exist, return the maximum number. 
// The time complexity must be in O(n).


const thirdMax = nums => {
  let max = nums[0];
  let max2 = undefined;
  let max3 = undefined;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === max || nums[i] === max2 || nums[i] === max3) continue;
    if (nums[i] > max) {
      max3 = max2;
      max2 = max;
      max = nums[i];
    } else if ((nums[i] > max2 && nums[i] < max) || (max2 === undefined)) {
      max3 = max2;
      max2 = nums[i];
    } else if ((nums[i] > max3 && nums[i] < max2) || (max3 === undefined)) {
      max3 = nums[i];
    }
  }
  return max3 === undefined ? max : max3;

}

export default thirdMax