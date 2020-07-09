import threeSumClosest from '../leetcode/3sum-closest';

describe('threeSumClosest()', () => {
  it(
    `should return 2
    for ([-1,2,1,-4], 1)`, () => {
    const nums = [-1, 2, 1, -4];
    const target = 1
    const expected = 2;
    const actual = threeSumClosest(nums, target);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 13
    for ([-1,2,1,-4,10,2,3,4,5,6,7,1], 13)`, () => {
    const nums = [-1, 2, 1, -4, 10, 2, 3, 4, 5, 6, 7, 1];
    const target = 13;
    const expected = 13;
    const actual = threeSumClosest(nums, target);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 22
    for ([-1,2,1,-4,10,2,3,4,5,6,7,1], 22)`, () => {
    const nums = [-1, 2, 1, -4, 10, 2, 3, 4, 5, 6, 7, 1];
    const target = 22;
    const expected = 22;
    const actual = threeSumClosest(nums, target);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 23
    for ([-1,2,1,-4,10,2,3,4,5,6,7,1], 25)`, () => {
    const nums = [-1, 2, 1, -4, 10, 2, 3, 4, 5, 6, 7, 1];
    const target = 25;
    const expected = 23;
    const actual = threeSumClosest(nums, target);

    expect(actual).toEqual(expected);
  });

  it(
    `should return -4
    for ([-1,2,1,-4,10,2,3,4,5,6,7,1], -6)`, () => {
    const nums = [-1, 2, 1, -4, 10, 2, 3, 4, 5, 6, 7, 1];
    const target = -6;
    const expected = -4;
    const actual = threeSumClosest(nums, target);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 3
    for ([0,1,2], 0)`, () => {
    const nums = [0,1,2];
    const target = 0;
    const expected = 3;
    const actual = threeSumClosest(nums, target);

    expect(actual).toEqual(expected);
  });


});