// #219

// Given an array of integers and an integer k, 
// find out whether there are two distinct indices i and j in the array 
// such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

const containsNearbyDuplicate = (nums, k) => {
  if (!nums || nums.length < 2) return false;

  let map = {};

  for (let i = 0; i < nums.length; ++i) {
    let int = nums[i];
    if (map[int] === undefined) {
      map[int] = i;
    } else {
      if ((i - map[int]) <= k) {
        return true;
      } else {
        map[int] = i;
      }
    }
  }
  return false;
}

export default containsNearbyDuplicate