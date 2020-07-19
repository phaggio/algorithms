// #263

// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Example:
// Input: 6
// Output: true
// Explanation: 6 = 2 × 3

// Example
// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2

// should return false for 0



const isUgly = num => {
  if (num < 1) return false;

  const factors = [2, 3, 5];

  for (const factor of factors) {
    while (num % factor === 0) {
      num = (num / factor);
    }
    if (num === 1 ) break;
  };
  return (num === 1)
}


export default isUgly