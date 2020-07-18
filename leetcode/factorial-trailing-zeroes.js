// #172

// Given an integer n, return the number of trailing zeroes in n!.

const trailingZeroes = n => {
  if (n < 5) return 0;

  let zeroes = 0;

  n = n - (n % 5);
  while (n / 5 >= 1) {
    n = n - (n % 5);
    zeroes += (n / 5);
    n = n / 5;
  }
  return zeroes;
}


export default trailingZeroes