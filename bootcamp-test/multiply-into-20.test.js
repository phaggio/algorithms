import multiplyInto20 from '../bootcamp/multiply-into-20';

describe(`multiplyInto20()`, () => {
	it(`should return false if no two numbers product equals 20 in the array`, () => {
		const arr = [1, 2, 3, 5];
		const expected = false;
		const actual = multiplyInto20(arr);

		expect(actual).toEqual(expected);
  });

  it(`should return false if no two numbers product equals 20 in the array`, () => {
		const arr = [1, 2, 4, 5];
		const expected = true;
		const actual = multiplyInto20(arr);

		expect(actual).toEqual(expected);
  });

  it(`should return false if no two numbers product equals 20 in the array`, () => {
		const arr = [1, 2, 3, 10, 7];
		const expected = true;
		const actual = multiplyInto20(arr);

		expect(actual).toEqual(expected);
  });
  
});