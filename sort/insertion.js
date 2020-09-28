const insertion = arr => {
  for (let i = 1; i < arr.length; ++i) {
    let position = i;
    let currentValue = arr[i]
    while (position > 0 && arr[position - 1] > currentValue) {
      arr[position] = arr[position - 1]
      position--;
    }
    arr[position] = currentValue
  }
  return arr
}

export default insertion