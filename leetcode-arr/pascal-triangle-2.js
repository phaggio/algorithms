// Given a non-negative integer numRows, return the Kth index row of Pascal's triangle.
// example
// [
//          [1],
//         [1,1],
//        [1,2,1],
//       [1,3,3,1],
//      [1,4,6,4,1],
//     [1,5,10,10,5,1],
//    [1,6,15,20,15,6,1],
//   [1,7,21,35,35,21,7,1],
//  [1,8,28,56,70,56,28,8,1]
// ]
// Input: 3
// Output: [1,3,3,1]


const generate = num => {
  if (num === 0) return [1];
  const pascalArr = [[1]];
  for (let i = 0; i < num; ++i) {
    const subArr = [1]
    for (let j = 1; j < pascalArr[i].length; ++j) {
      subArr.push(pascalArr[i][j] + pascalArr[i][j - 1]);
    }
    subArr.push(1);
    pascalArr.push(subArr);
  }

  return pascalArr[num];
}

export default generate


// big O num^2 / 2
// space num^2