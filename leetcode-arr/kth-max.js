// Find the kth largest element in an unsorted array. 
// Note that it is the kth largest element in the sorted order, 
// not the kth distinct element.


const mergeSort = arr => {
  if (arr.length === 1) return arr;

  // divide the array in half
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  let sortedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      sortedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // concat the last remaining element
  sortedArr = sortedArr.concat(left.slice(leftIndex));
  sortedArr = sortedArr.concat(right.slice(rightIndex));
  return sortedArr;
};

const findKthLargest = (nums, k) => {
  // sort first
  const sortedArr = mergeSort(nums);
  // return the value at kth index
  return sortedArr[k - 1];
}

export default findKthLargest

// Big O n Log n