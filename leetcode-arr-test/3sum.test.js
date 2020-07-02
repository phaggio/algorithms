import threeSum from '../leetcode-arr/3sum.js';

describe('threeSum()', () => {
  it(
    `should return
    [
      [-1,0,1],
      [-1,-1,2]
    ]
    for [-1, 0, 1, 2, -1, -4]`, () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const expected = [[-1, -1, 2], [-1, 0, 1]];
    const actual = threeSum(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return
    [
      [-1,0,1]
    ]
    for [-1, 0, 1, 2]`, () => {
    const nums = [-1, 0, 1, 2];
    const expected = [[-1, 0, 1]];
    const actual = threeSum(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return
    [
      [-1,0,1],
      [0,0,0]
    ]
    for [-1, 0, 1, 2, 0, 1, 0]`, () => {
    const nums = [-1, 0, 1, 2, 0, 1, 0];
    const expected = [[-1, 0, 1], [0, 0, 0]];
    const actual = threeSum(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return
    []
    for [-1,0,2,0]`, () => {
    const nums = [-1, 0, 2, 0];
    const expected = [];
    const actual = threeSum(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return
    []
    for [2,0]`, () => {
    const nums = [2, 0];
    const expected = [];
    const actual = threeSum(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return
    []
    for []`, () => {
    const nums = [];
    const expected = [];
    const actual = threeSum(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return
    [
      [-4,-1,5],
      [-3,-2,5],
      [-3,1,2],
      [-2,0,2],
      [-1,-1,2],
      [-1,0,1]
    ]
    for [-1,0,1,2,-1,-4,-2,-3,5]`, () => {
    const nums = [-1, 0, 1, 2, -1, -4, -2, -3, 5];
    const expected = [
      [-4, -1, 5],
      [-3, -2, 5],
      [-3, 1, 2],
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1]
    ];
    const actual = threeSum(nums);

    expect(actual).toEqual(expected);
  });

});