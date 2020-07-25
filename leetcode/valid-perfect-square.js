// #367 

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

// Examples:
// Input: num = 16
// Output: true

// Input: num = 14
// Output: false

// Constraints:
// 1 <= num <= 2^31 - 1


const isPerfectSquare = num => {
  if (num < 2) return true;
  let right = num;
  let left = 1;

  while (left <= right) {
    let mid = ((right + left) - ((right + left) % 2)) / 2;
    if (mid * mid === num) {
      return true;
    } else if (mid * mid > num) {
      right = mid - 1;
    } else {
      left = left + 1;
    }

  }
  return false;
}

export default isPerfectSquare