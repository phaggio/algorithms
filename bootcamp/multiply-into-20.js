// Write code to create a function that accepts an array of unique numbers
// If product of any two numbers in the array equals to 20, return true, else return false
// assume no negative

const multiplyInto20 = arr => {
  const numMap = {};
  for (const num of arr) {
    if (20 % num === 0) {
      numMap[num] = true;
      const targetNum = 20 / num
      if (numMap[targetNum]) return true;
    };
  }
  return false;
};

export default multiplyInto20