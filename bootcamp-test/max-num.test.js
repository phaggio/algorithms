import maxNum from '../bootcamp/max-num';

describe(`maxNum()`, () => {
	it(`should return the largest number in the array`, () => {
		const arr = [1, 2, 3, 4, 5];
		const expected = 5;
		const actual = maxNum(arr);

		expect(actual).toEqual(expected);
	});

	it(`should return the largest number in the array`, () => {
		const arr = [-1, 2, 8, 3, -4, 5];
		const expected = 8;
		const actual = maxNum(arr);

		expect(actual).toEqual(expected);
	});

	it(`should return the largest number in the array`, () => {
		const arr = [1, 2, 3, 4, 5];
		const expected = 5;
		const actual = maxNum(arr);

		expect(actual).toEqual(expected);
	});

	it(`should return the largest number in the array with all negative numbers`, () => {
		const arr = [-2, -3, -1, -4, -5];
		const expected = -1;
		const actual = maxNum(arr);

		expect(actual).toEqual(expected);
	});

	it(`should return the number in the array if there's only one number in the array`, () => {
		const arr = [1];
		const expected = 1;
		const actual = maxNum(arr);

		expect(actual).toEqual(expected);
	});

});