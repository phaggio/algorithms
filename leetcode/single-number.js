// #136

// Given a non-empty array of integers
// , every element appears twice except for one. Find that single one.
// Return 0 for empty array

// Note:

// Your algorithm should have a linear runtime complexity. 
// Could you implement it without using extra memory?

const singleNumber = nums => {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let map = {};

  for (const num of nums) {
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      delete map[num];
    };
  }

  return parseInt(Object.keys(map)[0]);

}


export default singleNumber