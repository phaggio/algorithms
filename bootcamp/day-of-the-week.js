// Write a function that takes in a number and returns the corresponding day of the week.
// Ex:
// - Input: 1
// - Output: 'Monday'

// - Input: 5
// - Output: 'Friday'

// - Input: 6
// - Output: 'Saturday'

// - Input: 8
// - Output: undefined

const dayObj = {
  1: `Monday`,
  2: `Tuesday`,
  3: `Wednesday`,
  4: `Thursday`,
  5: `Friday`,
  6: `Saturday`,
  7: `Sunday`
}

const dayOfTheWeek = int => {
  return dayObj[int];
}

export default dayOfTheWeek