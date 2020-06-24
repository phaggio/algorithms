// Write code to create a function that accepts a number
// returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method
// decimal numbers are not considered as perfect square

const digitalRoot = num => {
	const arr = num.toString().split(``);
	let sum = 0;
	for (const digit of arr) {
		sum += parseInt(digit);
	}
	if (sum > 9) {
		digitalRoot(sum);
	} else {
		return sum;
	}
}

const digitSum = num => {
	const arr = num.toString().split(``);
	let sum = 0;
	for (const digit of arr) {
		sum += parseInt(digit);
	}
	return sum;
}

// const isPerfectSquare = num => {
// 	if (!num || typeof num !== 'number') return false;
// 	if (num < 1) return false; // return false if negative value
// 	if (num % 1 !== 0) return false; // return false if decimal
// 	if (num === 1) return true; // square root of 1 is 1

// 	//we know that sum of any integer square will not end in 2, 3, 7, 8
// 	if (num % 10 === 2 || num % 10 === 3 || num % 10 === 7 || num % 10 === 8) return false;

// 	//we know that perfect squares always have digit sum or root in 0, 1, 4, 7, 9
// 	const validNums = [0, 1, 4, 7, 9];
// 	const numDigitalRoot = digitalRoot(num);
// 	const numDigitalSum = digitSum(num);
// 	for (const number of validNums) {
// 		if (number === numDigitalRoot || number === numDigitalSum) return true;
// 	};
// 	return false;
// };

const isPerfectSquare = num => {
	if (!num || typeof num !== 'number') return false;
	if (num < 1) return false; // return false if negative value
	if (num % 1 !== 0) return false; // return false if decimal
	if (num === 1) return true; // square root of 1 is 1

	let sum = 0;
	let i = 2;
	while (sum < num) {
		sum = i * i;
		if (sum === num) return true;
		++i;
	}
	return false;
}

export default isPerfectSquare
