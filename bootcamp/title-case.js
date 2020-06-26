// Write a function that takes a string and returns a new string with the first letters of each word capitalized

const titleCase = str => {
	if (!str) return null;
	const arr = str.split(` `);
	const newArr = [];
	for (let word of arr) {
		word = word.charAt(0).toUpperCase() + word.slice(1)
		newArr.push(word);
	}
	return newArr.join(` `)
};

export default titleCase