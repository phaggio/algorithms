//Given a sorted array nums, remove the duplicates in-place such that 
// each element appear only once and return the new length.

// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.

const removeDup = arr => {
  let count = 1;
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] !== arr[i - 1]) { count++ };
  };
  return count;
}

export default removeDup