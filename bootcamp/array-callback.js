// Write a function that takes an array of numbers and a callbackfunction as parameters. 
// The function parameter should return true if the input meets a certain condition or false otherwise. 
// Your function should run the function parameter on every element in the array parameter and:
// if it returns true, add the element to a new array, return the new array.
// if nothing returns true, return an empty array.
//
// It should return null if the function takes anything other than an array in the first arg.
//
// ---
// Input:
// [1,2,3] function(num){return num === 2}
// Output:
// [2]
// ---
// Input:
// [1,2,3,4,5,6] function(num){return num % 2 === 0}
// Output:
// [2,4,6]
// ---
// Input:
// [1,2,3,4,5,6] function(num){return num > 3}
// Output:
// [4,5,6]

const arrayCallback = (arr, cb) => {
	if (!Array.isArray(arr)) return null;
	// const newArr = [];
	// for (const item of arr) {
	// 	if (cb(item)) newArr.push(item);
	// }
	const newArr = arr.filter(item => cb(item));
	return newArr;
}

export default arrayCallback