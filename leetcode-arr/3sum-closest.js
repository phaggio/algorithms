// Given an array nums of n integers and an integer target, 
// find three integers in nums such that the sum is closest to target. 

// Return the sum of the three integers. 
// You may assume that each input would have exactly one solution.

// constraints
// 3 <= nums.length <= 10^3;
// -10^3 <= nums[i] <= 10^3;
// -10^4 <= nums[i] <= 10^4;

// [-4,-1,1,2] 1
// 2


const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b); // ascending sort

  let closest = nums[0] + nums[1] + nums[2]

  for (let currentIndex = 0; currentIndex < nums.length; ++currentIndex) {
    let nextIndex = currentIndex + 1;
    let lastIndex = nums.length - 1;

    while (nextIndex < lastIndex) {
      const sum = nums[currentIndex] + nums[nextIndex] + nums[lastIndex];
      if (sum === target) return sum;
      if (Math.abs(target - sum) < Math.abs(target - closest)) closest = sum;
      if (sum < target) {
        while (nextIndex < lastIndex && nums[nextIndex] === nums[nextIndex + 1]) nextIndex++;
        nextIndex++;
      } else {
        while (nextIndex < lastIndex && nums[lastIndex] === nums[lastIndex - 1]) lastIndex--;
        lastIndex--;
      }
    }
  }
  return closest

}

export default threeSumClosest