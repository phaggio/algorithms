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
		const arr1 = [-9, -7, -5, -3, -1];
		const arr2 = [-10, -8, -6, -4, -2];
		const expected = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
		const actual = mergeSorted(arr1, arr2);

		expect(actual).toEqual(expected);
	});

	it(`should return a sorted array when one array is empty`, () => {
		const arr1 = [1, 3, 5, 7, 9];
		const arr2 = [];
		const expected = [1, 3, 5, 7, 9];
		const actual = mergeSorted(arr1, arr2);

		expect(actual).toEqual(expected);
	});

	it(`should return a sorted array when arr2 is all greater than arr1`, () => {
		const arr1 = [1, 2, 3, 4, 5];
		const arr2 = [6, 7, 8, 9, 10];
		const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const actual = mergeSorted(arr1, arr2);

		expect(actual).toEqual(expected);
	});

	it(`should return a sorted array when arrays have different length`, () => {
		const arr1 = [1, 3, 5, 7, 9, 11, 12, 13];
		const arr2 = [2, 4, 6, 8, 10];
		const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
		const actual = mergeSorted(arr1, arr2);

		expect(actual).toEqual(expected);
	});

});