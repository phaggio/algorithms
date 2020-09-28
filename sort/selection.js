const selection = arr => {
  for (let i = 0; i < arr.length; ++i) {
    let lowestNumIndex = i
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] <= arr[lowestNumIndex]) lowestNumIndex = j
    }
    if (lowestNumIndex !== i) {
      const temp = arr[i]
      arr[i] = arr[lowestNumIndex]
      arr[lowestNumIndex] = temp
    }
  }
  return arr
}

export default selection