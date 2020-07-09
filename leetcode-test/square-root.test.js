import mySqrt from '../leetcode/square-root';

describe('mySqrt()', () => {

  it(
    `should return 0 for input of 0`, () => {
    const nums = 0;
    const expected = 0;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 1 for input of 1`, () => {
    const nums = 1;
    const expected = 1;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 2 for input of 4`, () => {
    const nums = 4;
    const expected = 2;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 2 for input of 5`, () => {
    const nums = 5;
    const expected = 2;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 2 for input of 8`, () => {
    const nums = 8;
    const expected = 2;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 3 for input of 9`, () => {
    const nums = 9;
    const expected = 3;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 3 for input of 15`, () => {
    const nums = 15;
    const expected = 3;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 4 for input of 16`, () => {
    const nums = 16;
    const expected = 4;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 4 for input of 17`, () => {
    const nums = 17;
    const expected = 4;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 10 for input of 101`, () => {
    const nums = 101;
    const expected = 10;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 10 for input of 120`, () => {
    const nums = 120;
    const expected = 10;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 11 for input of 122`, () => {
    const nums = 122;
    const expected = 11;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 16 for input of 263`, () => {
    const nums = 263;
    const expected = 16;
    const actual = mySqrt(nums);

    expect(actual).toEqual(expected);
  });

});