// Write a function that takes an array of integers as an input and outputs the first duplicate.
// ---
// Input: [ 2, 5, 6, 3, 5 ]
// Output: 5
// ---
// Input: [ 1, 3, 4, 1, 3, 4 ]
// Output: 1
// ---
// Input: [ 2, 4, 5 ]
// Output: undefined
// ---
// Input: []
// Output: undefined
// ---
// Input: 'test'
// Output: undefined

const firstDupInt = arr => {
  if (!arr || !Array.isArray(arr)) return undefined;
  const obj = {};
  for (const int of arr) {
    if (!obj[int]) {
      obj[int] = int
    } else {
      return int;
    }
  }
  return undefined;
}

export default firstDupInt

// bigO n