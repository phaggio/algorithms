// Write a function that accepts a string and returns an acronym for the given string
// return null if no string provided or takes a non-string value

const acronymBuilder = str => {
	if (str === undefined || str === null) return null;
	if (typeof str !== `string`) return null;

	const strArr = str.split(` `);
	let acronym = ``;
	for (const word of strArr) {
		let firstChar = word[0].toUpperCase();
		acronym += firstChar;
	}
	return acronym;
};

export default acronymBuilder