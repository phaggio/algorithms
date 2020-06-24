// Write code to return the largest number in the given array

// Input: array
// Output: int 

const maxNum = arr => {
	let max = arr[0];

	for (let i = 1; i < arr.length; ++i) {
		let currentNum = arr[i];
		if (currentNum > max) {
			max = currentNum;
		}
	}

	return max;
};

export default maxNum