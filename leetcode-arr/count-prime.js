// Count the number of prime numbers less than a non-negative number, n.

const countPrimes = n => {
  if (n < 2) return 0;
  let primeArr = new Array(n).fill(true);
  primeArr[0] = false;
  primeArr[1] = false;

  for (let i = 2; i * i < n; ++i) {
    if (primeArr[i]) {
      for (let j = i * i; j < n; j += i) {
        primeArr[j] = false;
      }
    }
  }

  return primeArr.filter((num) => num === true).length;
}

export default countPrimes