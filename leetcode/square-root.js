// #69

// Implement int sqrt(int x).

// Compute and return the square root of x, 
// where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, 
// the decimal digits are truncated and only the integer part of the result is returned.

const mySqrt = num => {
  if (num < 2) return num;

  let high = (num - (num % 2)) / 2; // this will always return an whole number just at or below half
  let low = 2;
  let mid = (high + low - ((high + low) % 2)) / 2;

  while (low !== mid) {

    if (mid * mid === num) {
      return mid;
    } else if (mid * mid > num) {
      high = mid;
      mid = (high + low - ((high + low) % 2)) / 2;
    } else {
      low = mid;
      mid = (high + low - ((high + low) % 2)) / 2;
    }
  }

  return mid;
}


export default mySqrt