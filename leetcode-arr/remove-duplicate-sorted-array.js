//Given a sorted array nums, remove the duplicates in-place such that 
// each element appear only once and return the new length.

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.

// const removeDup = nums => {
//   let count = 1;
//   let uniqueIndex = 0;
//   for (let i = 0; i < nums.length; ++i) {
//     if (nums[uniqueIndex] !== nums[i]) {
//       uniqueIndex = i;
//       count++
//     };
//   };
//   return count;
// }

const removeDup = nums => {
  let i = 0;
  let endIndex = nums.length - 1;
  while (i < endIndex) {
    if (nums[i] === nums[i + 1]) { 
      nums.splice(i + 1, 1);
      endIndex--;
    } else {
      i++;
    }
  }
  return nums.length;
}

export default removeDup

// Big O n (two pointers)