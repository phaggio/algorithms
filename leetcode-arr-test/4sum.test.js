import fourSum from '../leetcode-arr/4sum.js';

describe('fourSum()', () => {
  it(
    `should return
    [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1]
    ]
    for [1, 0, -1, 0, -2, 2], target = 0`, () => {
    const nums = [1, 0, -1, 0, -2, 2];
    const target = 0;
    const expected = [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1]
    ];
    const actual = fourSum(nums, target);

    expect(actual).toEqual(expected);
  });

  it(
    `should return
    [
      [-1,  0, 0, 1],
      [-2, -1, 1, 2],
      [-2,  0, 0, 2]
    ]
    for [1, 0, -1, 0, -2, 2], target = 2`, () => {
    const nums = [1, 0, -1, 0, -2, 2];
    const target = 2;
    const expected = [
      [-1, 0, 1, 2]
    ];
    const actual = fourSum(nums, target);

    expect(actual).toEqual(expected);
  });


  it(
    `should return
    [
      [-2,-1,3,5],
      [-2,0,2,5],
      [-1,0,1,5],
      [-1,1,2,3],
      [0,0,2,3]
    ]
    for [1, 0, -1, 0, -2, 2, 3, 5], target = 2`, () => {
    const nums = [1, 0, -1, 0, -2, 2, 3, 5];
    const target = 5;
    const expected = [[-2, -1, 3, 5], [-2, 0, 2, 5], [-1, 0, 1, 5], [-1, 1, 2, 3], [0, 0, 2, 3]]
    const actual = fourSum(nums, target);

    expect(actual).toEqual(expected);
  });

});