// Write code to merge two sorted arrays into a new sorted array

const mergeSorted = (arr1, arr2) => {
  let output = [];

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length === 0) {
      output = [...arr2, ...output];
      arr2 = [];
    } else if (arr2.length === 0) {
      output = [...arr1, ...output];
      arr1 = [];
    } else {
      if (arr1[arr1.length - 1] >= arr2[arr2.length - 1]) {
        const num = arr1.pop();
        output = [num, ...output];
      } else {
        const num = arr2.pop();
        output = [num, ...output];
      }
    }
  }
  return output;
};

export default mergeSorted