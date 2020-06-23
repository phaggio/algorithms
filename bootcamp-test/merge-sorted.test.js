import mergeSorted from '../bootcamp/merge-sorted';

describe(`mergeSorted()`, () => {
	it(`should return a sorted array`, () => {
		const arr1 = [1, 3, 5, 7, 9];
		const arr2 = [2, 4, 6, 8, 10];
		const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const actual = mergeSorted(arr1, arr2);

		expect(actual).toEqual(expected);
	});

	it(`should return a sorted array of negative numbers`, () => {
		const arr1 = [-1, -3, -5, -7, -9];
		const arr2 = [-2, -4, -6, -8, -10];
		const expected = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
		const actual = mergeSorted(arr1, arr2);

		expect(actual).toEqual(expected);
	});

});