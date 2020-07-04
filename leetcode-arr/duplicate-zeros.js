// #1089

// Given a fixed length array arr of integers, duplicate each occurrence of zero, 
// shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, 
// do not return anything from your function.


// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]

// Note:
// 1 <= arr.length <= 10000
// 0 <= arr[i] <= 9

// const duplicateZeros = arr => {
//   if (arr.length === 1 || arr === null) return;

//   for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] === 0) {
//       arr.splice(i + 1, 0, 0);
//       arr.pop();
//       ++i;
//     }
//   }
//   return arr;
// }

const duplicateZeros = arr => {
  if (arr.length === 1 || arr === null) return;

  let ret = [];
  let count = -1;

  for (let i = 0; i < arr.length; ++i) {
    count++;
    ret[count] = arr[i];
    if (count + 1 === arr.length) break;

    if (arr[i] === 0) {
      count++;
      ret[count] = 0;
    }

    if (count + 1 === arr.length) break;
  }

  arr.forEach((current, index, array) => {
    array[index] = ret[index];
  });

  // return arr;
}

export default duplicateZeros

// not supposed to return anything
// only return in this case to run test.