import twoSum from '../leetcode/two-sum2';
describe('twoSum()', () => {
  it(`should return [1,2] for [-1,1,2,7,11,15], target = 22`, () => {
    const numbers = [-1, 1, 2, 7, 11, 15];
    const target = 0;

    const expected = [1, 2];
    const actual = twoSum(numbers, target);

    expect(actual).toEqual(expected);
  });

  it(`should return [1,2] for [2,7,11,15], target = 9`, () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;

    const expected = [1, 2];
    const actual = twoSum(numbers, target);

    expect(actual).toEqual(expected);
  });

  it(`should return [1,4] for [1,1,1,1,2,7,11,15], target = 2`, () => {
    const numbers = [1, 1, 1, 1, 2, 7, 11, 15];
    const target = 2;

    const expected = [1, 4];
    const actual = twoSum(numbers, target);

    expect(actual).toEqual(expected);
  });

  it(`should return [1,4] for [1,1,2,2,7,11,15], target = 3`, () => {
    const numbers = [1, 1, 2, 2, 7, 11, 15];
    const target = 3;

    const expected = [1, 4];
    const actual = twoSum(numbers, target);

    expect(actual).toEqual(expected);
  });

});