// #283

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


// const moveZeroes = nums => {
//   let iterations = nums.length - 1;
//   for (let i = 0; i <= iterations; ++i) {
//     if (nums[i] === 0) {
//       let zero = nums.splice(i, 1);
//       nums.push(zero[0]);
//       --i;
//       --iterations;
//     }
//   }
//   return nums;
// }


const moveZeroes = nums => {
  let output = [];
  let zeroes = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      zeroes++;
    } else {
      output.push(nums[i]);
    }
  }

  for (let i = 0; i < zeroes; ++i) {
    output.push(0);
  }
  return output;
}

export default moveZeroes