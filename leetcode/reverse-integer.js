const MAX_INT = 2 ** 31 - 1
const MIN_INT = -(2 ** 31)

const reverse = num => {
  let input = num
  let output = 0

  while (input !== 0) {
    const remainder = input % 10
    const remainderInDecimal = remainder / 10;

    if (output + remainderInDecimal > (MAX_INT / 10)) return 0
    if (output + remainderInDecimal < (MIN_INT / 10)) return 0

    output = output * 10 + remainder
    input = round(input / 10)
  }

  return output
}

const round = num => { return num < 0 ? Math.ceil(num) : Math.floor(num) }


export default reverse