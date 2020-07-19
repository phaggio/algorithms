// #217

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.

const containsDuplicate = nums => {
  if (!nums || nums.length < 2) return false;

  let map = {};
  for (const num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      return true;
    }
  }

  return false;
}

export default containsDuplicate