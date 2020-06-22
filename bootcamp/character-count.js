// Write code to create a function that accepts a string and returns 
// an object containing the number of times each character appears in the string
// return null if it takes non-string or null in its arg.

const characterCount = str => {
	if (!str || typeof str !== 'string') return null;
	const obj = {};
	for (const char of str) {
		if (obj[char] === undefined) {
			obj[char] = 1
		} else {
			obj[char] += 1;
		}
	}
	return obj;
};

export default characterCount

// bigO n