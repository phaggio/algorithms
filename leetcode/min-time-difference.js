// #539

// Given a list of 24-hour clock time points in "Hour:Minutes" format, 
// find the minimum minutes difference between any two time points in the list.

// Example 1:
// Input: ["23:59","00:00"]
// Output: 1
// Note:
// The number of time points in the given list is at least 2 and won't exceed 20000.
// The input time is legal and ranges from 00:00 to 23:59.


const toMin = timePoint => {
  let hour = timePoint.substring(0, 2);
  let min = timePoint.substring(3);
  return (parseInt(hour) * 60 + parseInt(min) - 720);
}

const findMinDifference = timePoints => {
  timePoints.sort();
  let min = 720;
  for (let i = 1; i < timePoints.length; ++i) {
    let diff = toMin(timePoints[i]) - toMin(timePoints[i - 1]);
    if (diff < min) min = diff;
  }

  let lastCheck = 1440 - (toMin(timePoints[timePoints.length - 1]) - toMin(timePoints[0]));
  if (lastCheck < min) min = lastCheck

  return min;
}

export default findMinDifference