// Write code to create a function that accepts a number (`n`) 
// and returns a new number that satisfies the look-and-say-sequence

// To generate a member of the sequence from the previous member, read off the digits of the previous member, counting the number of digits in groups of the same digit. 
// For example:
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// 1211 is read off as "one 1, one 2, then two 1s" or 111221.
// 111221 is read off as "three 1s, two 2s, then one 1" or 312211.

// Input: int
// Output: int

const lookAndSay = num => {
	const arr = num.toString().split(``);
	let newNum = ``;
	let currentNum = arr[0];
	let currentCount = 0;

	for (let i = 0; i < arr.length; ++i) {
		if (arr[i + 1] === undefined) {
			currentNum = arr[i];
			currentCount++;
			newNum = newNum + currentCount.toString() + currentNum;
			continue;
		}
		if (arr[i] === arr[i + 1]) {
			currentCount++;
		} else {
			currentNum = arr[i];
			currentCount++;
			newNum = newNum + currentCount.toString() + currentNum;
			currentCount = 0;
		}
	}
	return parseInt(newNum);

};

export default lookAndSay