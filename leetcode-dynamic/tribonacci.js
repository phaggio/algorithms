// #1137

// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.


// Constraints:
// 0 <= n <= 37
// The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.


// iterative approach
// const tribonacci = n => {
//   if (n === 0) return 0;
//   if (n < 3) return 1;

//   let num2 = 0;
//   let num1 = 1;
//   let num = 1;
//   let current;

//   for (let i = 3; i <= n; ++i) {
//     current = num2 + num1 + num;
//     num2 = num1;
//     num1 = num;
//     num = current;
//   }

//   return current;
// }


// recursive approach
const tribonacci = (n, obj = {}) => {
  if (n === 0) return 0;
  if (n < 3) return 1;
  if (obj[n]) return obj[n];
  obj[n] = (tribonacci(n - 1, obj) + tribonacci(n - 2, obj) + tribonacci(n - 3, obj));

  return obj[n];

}


export default tribonacci