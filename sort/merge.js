const mergesort = (arr) => {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length - 1 / 2)

  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergesort(left), mergesort(right))
}

const merge = (left, right) => {
  let leftIndex = 0
  let rightIndex = 0
  let output = []
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      output.push(left[leftIndex])
      leftIndex++;
    } else {
      output.push(right[rightIndex])
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    output.push(left[leftIndex])
    leftIndex++
  }

  while (rightIndex < right.length) {
    output.push(right[rightIndex])
    rightIndex++
  }

  return output
}


export default mergesort