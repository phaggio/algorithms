const bubble = arr => {
  let lastUnsortedIndex = arr.length - 1;

  while (lastUnsortedIndex !== 0) {
    for (let i = 0; i <= lastUnsortedIndex; ++i) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp
      }
    }
    lastUnsortedIndex--;
  }
  return arr
}

export default bubble