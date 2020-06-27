// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

const zeroesAndOnes = str => {
	const arr = str.split(``);
	let zeroes = 0;
	let ones = 0;

	for (const num of arr) {
		if (num === '0') zeroes++;
		if (num === '1') ones++;
	}
	return zeroes === ones;
};

export default zeroesAndOnes