// Write code to create a function that accepts an array of numbers
// finds the largest two numbers, and returns the product of the two

const productOfLargestTwo = arr => {
	let numOne = null;
	let numTwo = null;

	for (const num of arr) {
		if (num >= numOne || numOne === null) {
			numTwo = numOne;
			numOne = num;
		} else if (num > numTwo || numTwo === null) {
			numTwo = num;
		}
	}
	return numOne * numTwo;
};

export default productOfLargestTwo