// Write code to create a function that returns the factorial of `num`
// e.g. 4! = 24
// e.g. 1! = 1
// e.g. 0! = 1
// there's no negative factorial

const factorial = num => {
  if (num === null || typeof num !== 'number') return null;
  if (num < 0) return null;
  if (num === 0 ) return 1;
  let sum = 1;
  for (let i = 1; i <= num; ++i) {
    sum = sum * i
  }
  return sum;
};

export default factorial