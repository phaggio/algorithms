const swap = (arr, left, right) => {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp;
}

const partition = (arr, left, right, pivot) => {
  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
}

const quickselect = (kthLowestValue, arr, left, right) => {
  if (left >= right) return arr[kthLowestValue]

  const pivot = arr[left + Math.floor((right - left) / 2)]
  const index = partition(arr, left, right, pivot)

  if (kthLowestValue < index) {
    quickselect(kthLowestValue, arr, left, index - 1)
  } else {
    quickselect(kthLowestValue, arr, index, right)
  }


  return arr[kthLowestValue]
}

export default quickselect