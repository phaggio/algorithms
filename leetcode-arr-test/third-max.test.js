import thirdMax from '../leetcode-arr/third-max';

describe('thirdMax()', () => {
  it(
    `should return 1 for:
      nums = [1, 3, 2]
    `, () => {
    const nums = [1, 3, 2];
    const expected = 1;
    const actual = thirdMax(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 2 for:
      nums = [1, 2]
    `, () => {
    const nums = [1, 2];
    const expected = 2;
    const actual = thirdMax(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 1 for:
      nums = [2, 1, 3, 2]
    `, () => {
    const nums = [2, 1, 3, 2];
    const expected = 1;
    const actual = thirdMax(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 1 for:
      nums = [2, 1, 3, 2, 0, -1]
    `, () => {
    const nums = [2, 1, 3, 2, 0, -1];
    const expected = 1;
    const actual = thirdMax(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 1 for:
      nums = [2, 1, 3, 5, 2, 0, -1, 4]
    `, () => {
    const nums = [2, 1, 3, 5, 2, 0, -1, 4];
    const expected = 3;
    const actual = thirdMax(nums);

    expect(actual).toEqual(expected);
  });

});