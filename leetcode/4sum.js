// Given an array nums of n integers and an integer target, 
// are there elements a, b, c, and d in nums such that a + b + c + d = target? 
// Find all unique quadruplets in the array which gives the sum of target.

// Note:

// The solution set must not contain duplicate quadruplets.

// [-2, -1, 0, 0, 1, 2]

const fourSum = (nums, target) => {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b); // ascending sort

  const result = [];

  for (let firstIndex = 0; firstIndex < nums.length - 3; ++firstIndex) {
    let secondIndex = firstIndex + 1;
    for (secondIndex; secondIndex < nums.length - 2; ++secondIndex) {
      let thirdIndex = secondIndex + 1;
      let fourthIndex = nums.length - 1;

      while (thirdIndex < fourthIndex) {
        const sum = nums[firstIndex] + nums[secondIndex] + nums[thirdIndex] + nums[fourthIndex];
        if (sum === target) {
          result.push([nums[firstIndex], nums[secondIndex], nums[thirdIndex], nums[fourthIndex]]);
          while (thirdIndex < fourthIndex && nums[thirdIndex] === nums[thirdIndex + 1]) thirdIndex++;
          thirdIndex++;
          while (thirdIndex < fourthIndex && nums[fourthIndex] === nums[fourthIndex - 1]) fourthIndex--;
          fourthIndex--;
        } else if (sum < target) {
          thirdIndex++;
        } else {
          fourthIndex--;
        }
      }
      while (nums[secondIndex] === nums[secondIndex + 1]) secondIndex++;
    }
    while (firstIndex < nums.length - 3 && nums[firstIndex] === nums[firstIndex + 1]) firstIndex++;
  }
  return result
}

export default fourSum

// four pointers
// Big O of n^2 * log n