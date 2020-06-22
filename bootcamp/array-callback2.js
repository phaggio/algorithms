// Write the below four functions, each of which has two parameters - an array and a function which returns a boolean given an entry in the array
// ## HasSome
// Returns true if any of the values in the array meet the given condition
// ## HasNone
// Returns true if none of the values in the array meet the given condition
// ## HasAll
// Returns true if all of the values in the array meet the given condition
// ## HasMost
// Returns true if more than 50% of the values in the array meet the given condition
// if it takes an non-array, return false.

const arrayCallback2 = {
	hasSome: function (array, cb) {
		if (!Array.isArray(array)) return false;
		if (array === null || array === undefined) return false;
		for (const item of array) {
			if (cb(item)) return true;
		}
		return false;
	},
	hasNone: function (array, cb) {
		if (!Array.isArray(array)) return false;
		if (array === null || array === undefined) return false;
		for (const item of array) {
			if (cb(item)) return false;
		}
		return true;
	},
	hasAll: function (array, cb) {
		if (!Array.isArray(array)) return false;
		if (array === null || array === undefined) return false;
		for (const item of array) {
			if (!cb(item)) return false;
		}
		return true;
	},
	hasMost: function (array, cb) {
		if (!Array.isArray(array)) return false;
		if (array === null || array === undefined) return false;
		if (array.length === 0) return false;
		const mostNum = Math.ceil(array.length / 2);
		let count = 0;
		for (const item of array) {
			if (cb(item)) ++count;
			if (count >= mostNum) return true;
		}
		return false;
	}
};

export default arrayCallback2