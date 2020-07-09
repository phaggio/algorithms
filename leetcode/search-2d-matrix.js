// Write an efficient algorithm that searches for a value in an m x n matrix. 
// This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.


const searchMatrix = (matrix, target) => {
	if (!matrix || matrix.length === 0) return false;
	const endIndex = matrix[0].length - 1;

	for (const arr of matrix) {
		if (arr[endIndex] < target) continue;
		if (arr[0] > target) return false;
		for (const int of arr) {
			if (int === target) {
				return true;
			}
		}
	}
	return false;
}

export default searchMatrix