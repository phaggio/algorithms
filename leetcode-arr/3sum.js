// #15
// Given an array nums of n integers, are there elements a, b, c in nums 
// such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// firstInt + secondInt + thirdInt = 0;
// thirdInt = 0 - firstInt - secondInt;

const threeSum = nums => {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b); // ascending sort

  const result = [];

  for (let currentIndex = 0; currentIndex < nums.length; ++currentIndex) {
    let nextIndex = currentIndex + 1;
    let lastIndex = nums.length - 1;

    while (nextIndex < lastIndex) {
      const sum = nums[currentIndex] + nums[nextIndex] + nums[lastIndex];
      if (sum === 0) {
        result.push([nums[currentIndex], nums[nextIndex], nums[lastIndex]]);

        while (nextIndex < lastIndex && nums[nextIndex] === nums[nextIndex + 1]) nextIndex++;
        nextIndex++;
        while (nextIndex < lastIndex && nums[lastIndex] === nums[lastIndex - 1]) lastIndex--;
        lastIndex--;

      } else if (sum < 0) {
        while (nextIndex < lastIndex && nums[nextIndex] === nums[nextIndex + 1]) nextIndex++;
        nextIndex++;
      } else {
        while (nextIndex < lastIndex && nums[lastIndex] === nums[lastIndex - 1]) lastIndex--;
        lastIndex--;
      }
    }

    while (currentIndex < nums.length - 1 && nums[currentIndex] === nums[currentIndex + 1]) currentIndex++;

  }
  return result

}

export default threeSum

// const arr = [-1, 0, 1, 2];
// threeSum(arr);

// Two pointers
