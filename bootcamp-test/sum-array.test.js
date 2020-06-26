import sumArray from '../bootcamp/sum-array';

describe('sumArray()', () => {
  it(`should return sum of array [1, 2, 3, 4]`, () => {
    const arr = [1, 2, 3, 4];
    const expected = 10;
    const actual = sumArray(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return sum of array [1]`, () => {
    const arr = [1];
    const expected = 1;
    const actual = sumArray(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return sum of array [1, -2, -3, 4, 5]`, () => {
    const arr = [1, -2, -3, 4, 5];
    const expected = 5;
    const actual = sumArray(arr);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 of an empty array []`, () => {
    const arr = [];
    const expected = 0;
    const actual = sumArray(arr);

    expect(actual).toEqual(expected);
  });

});