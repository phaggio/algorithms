// # 31

// Implement next permutation, 
// which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, 
// it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.


const nextPermutation = nums => {
  if (nums.length === 1) return nums;

  // swap two elements in the array
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  // reverse the elements in an array starting startIndex till end of the array
  const reverse = (start, end) => {
    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  }

  // start from the last el in array
  for (let i = nums.length - 1; i > 0; --i) {

    // check against its previous digit
    if (nums[i] > nums[i - 1]) {
      // reverse the subarray from index i to end of array, to ascending order.
      reverse(i, nums.length - 1);

      for (let k = i; k < nums.length; ++k) {
        if (nums[i - 1] < nums[k]) {
          swap(k, i - 1) 
          // break;
          return nums;
        }
      }

      // return nums;
    }
  };
  reverse(0, nums.length - 1);
  return nums;
}

export default nextPermutation


// O of n log n