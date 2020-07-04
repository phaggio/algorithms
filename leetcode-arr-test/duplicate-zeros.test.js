import duplicateZeros from '../leetcode-arr/duplicate-zeros.js';

describe('duplicateZeros()', () => {
  it(
    `should modify original array to [1,0,0,2,3,0,0,4]
    for [1, 0, 2, 3, 0, 4, 5, 0]`, () => {
    const arr = [1, 0, 2, 3, 0, 4, 5, 0];
    const expected = [1, 0, 0, 2, 3, 0, 0, 4];
    const actual = duplicateZeros(arr);

    expect(actual).toEqual(expected);
  });

  it(
    `should modify original arr to [1,2,3]
    for [1, 2, 3]`, () => {
    const arr = [1, 2, 3];
    const expected = [1, 2, 3];
    const actual = duplicateZeros(arr);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [1, 0, 0, 2, 0, 0, 0, 0, 3]
    for [1,0,2,0,0,3,0,4,5]`, () => {
    const arr = [1, 0, 2, 0, 0, 3, 0, 4, 5];
    const expected = [1, 0, 0, 2, 0, 0, 0, 0, 3];
    const actual = duplicateZeros(arr);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [1,0]
    for [1,0]`, () => {
    const arr = [1, 0];
    const expected = [1, 0];
    const actual = duplicateZeros(arr);

    expect(actual).toEqual(expected);
  });

  it(
    `should return [0]
    for [0]`, () => {
    const arr = [0];
    const expected = [0];
    const actual = duplicateZeros(arr);

    expect(actual).toEqual(expected);
  });

});