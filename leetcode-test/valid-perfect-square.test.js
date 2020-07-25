import isPerfectSquare from '../leetcode/valid-perfect-square';

describe('isPerfectSquare()', () => {

  it(`should return true for 1`, () => {
    const num = 1;

    const expected = true;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for 2`, () => {
    const num = 2;

    const expected = false;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 4`, () => {
    const num = 4;

    const expected = true;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 9`, () => {
    const num = 9;

    const expected = true;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for 12`, () => {
    const num = 12;

    const expected = false;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 16`, () => {
    const num = 16;

    const expected = true;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for 99`, () => {
    const num = 99;

    const expected = false;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 100`, () => {
    const num = 100;

    const expected = true;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for 101`, () => {
    const num = 101;

    const expected = false;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });
});