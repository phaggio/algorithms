const addDigits = num => {

  let arr = ("" + num).split("")

  while (arr.length > 1) {
    let newNum = 0
    for (const num of arr) {
      newNum = parseInt(num) + newNum
    }
    arr = ("" + newNum).split("")
  }

  return parseInt(arr[0])
}

export default addDigits