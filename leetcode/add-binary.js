const addBinary = (a, b) => {
  const aArr = a.split("")
  const bArr = b.split("")
  let output = '';

  let carry = false;

  while (aArr.length > 0 || bArr.length > 0) {
    const aChar = aArr.pop()
    const bChar = bArr.pop()

    if (aChar === "1" && bChar === "1") {
      if (carry) {
        output = "1" + output
        carry = true
      } else {
        output = "0" + output
        carry = true
      }
    } else if (aChar === "1" || bChar === "1") {
      if (carry) {
        output = "0" + output
        carry = true
      } else {
        output = "1" + output
        carry = false
      }
    } else {
      if (carry) {
        output = "1" + output
        carry = false
      } else {
        output = "0" + output
        carry = false
      }
    }
  }

  output = carry ? "1" + output : output
  return output
}

export default addBinary