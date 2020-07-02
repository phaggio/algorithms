// Given four lists A, B, C, D of integer values, 
// compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

// To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. 
// All integers are in the range of -(2)^28 to (2)^28 - 1 
// and the result is guaranteed to be at most 2^31 - 1.

const fourSumCount = (a, b, c, d) => {
  let map = new Map();
  let count = 0;

  for (let i = 0; i < a.length; ++i) {
    for (let j = 0; j < b.length; ++j) {
      const sum = a[i] + b[j];
      map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1);
    }
  }
  for (let i = 0; i < a.length; ++i) {
    for (let j = 0; j < b.length; ++j) {
      const sum = c[i] + d[j];
      const lookup = 0 - sum;
      if (map.has(lookup)) {
        count += map.get(lookup)
      }
    }
  }
  return count;
}

export default fourSumCount