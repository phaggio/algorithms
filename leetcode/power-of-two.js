// #231

// Given an integer, write a function to determine if it is a power of two.

// Example
// Input: 1
// Output: true 
// Explanation: 20 = 1

// Example
// Input: 16
// Output: true
// Explanation: 24 = 16

// Example 3:
// Input: 218
// Output: false

const isPowerOfTwo = num => {
  if (num < 1) return false;

  while (num % 2 === 0) {
    num = num / 2;
  }
  return (num === 1);
}

export default isPowerOfTwo