import nextPermutation from '../leetcode/next-permutation.js';

describe('nextPermutation()', () => {
  it(
    `should return [0] for [0]
    `, () => {
    const nums = [0]
    const expected = [0];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [2,1,3] for [1,3,2]
    `, () => {
    const nums = [1, 3, 2]
    const expected = [2, 1, 3];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [1,3,2] for [1,2,3]
    `, () => {
    const nums = [1, 2, 3]
    const expected = [1, 3, 2];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [2,1,3,4] for [1,4,3,2]
    `, () => {
    const nums = [1, 4, 3, 2]
    const expected = [2, 1, 3, 4];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [2,1,1,3,4] for [1, 4, 3, 2, 1]
    `, () => {
    const nums = [1, 4, 3, 2, 1]
    const expected = [2, 1, 1, 3, 4];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [2,1,1,1,2,3,4] for [1, 4, 3, 2, 2, 1, 1]
    `, () => {
    const nums = [1, 4, 3, 2, 2, 1, 1];
    const expected = [2, 1, 1, 1, 2, 3, 4];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [1,3,2] for [1,2,3]
    `, () => {
    const nums = [1, 2, 3]
    const expected = [1, 3, 2];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [1,2,3] for [3,2,1]
    `, () => {
    const nums = [3, 2, 1]
    const expected = [1, 2, 3];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [1,5,1] for [1,1,5]
    `, () => {
    const nums = [1, 1, 5]
    const expected = [1, 5, 1];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [0,0,1] for [1,0,0]
    `, () => {
    const nums = [1, 0, 0]
    const expected = [0, 0, 1];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [1,0,0] for [0,1,0]
    `, () => {
    const nums = [0, 1, 0]
    const expected = [1, 0, 0];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [0,1,0] for [0,0,1]
    `, () => {
    const nums = [0, 0, 1]
    const expected = [0, 1, 0];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [8,8,7,6,3,1,1,2,2,4,5] for [8,8,7,6,2,5,4,3,2,2,1,0]
    `, () => {
    const nums = [8, 8, 7, 6, 2, 5, 4, 3, 2, 2, 1, 0];
    const expected = [8, 8, 7, 6, 3, 0, 1, 2, 2, 2, 4, 5];
    const actual = nextPermutation(nums);

    expect(actual).toEqual(expected);
  });


});