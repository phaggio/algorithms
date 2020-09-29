const fibonacci = (num, map) => {
  if (num <= 0) {
    return 0
  } else if (num === 1) {
    return 1
  } else if (map[num] === undefined) {
    map[num] = fibonacci(num - 1, map) + fibonacci(num - 2, map)
  }
  return map[num]
}


export default fibonacci