// 509

// The Fibonacci numbers, commonly denoted F(n) form a sequence, 
// called the Fibonacci sequence, such that each number is the sum of the two preceding ones, 
//starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).


const fib = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let n2 = 0;
  let n1 = 1;
  let fib;
  for (let i = 2; i <= n; ++i) {
    fib = n2 + n1;
    n2 = n1;
    n1 = fib;
  }

  return fib;
}

export default fib;