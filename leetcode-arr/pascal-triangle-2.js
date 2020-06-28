// Given a non-negative integer numRows, return the Kth index row of Pascal's triangle.
// example
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
// Input: 3
// Output: [1,3,3,1]


const generate = num => {
	if (num === 0) return [];
	let count = 1;
	let outputArr = [[1]];
	while (count < num) {
		const latestSubArr = outputArr[outputArr.length - 1]
		const steps = latestSubArr.length - 1;
		let newSubArr = [];
		newSubArr.push(1);
		for (let i = 0; i < steps; i++) {
			const int = latestSubArr[i] + latestSubArr[i + 1];
			newSubArr.push(int);
		}
		newSubArr.push(1);
		outputArr.push(newSubArr);
		count++;
	}
	return outputArr;
}

export default generate


// big O num^2
// space num^2