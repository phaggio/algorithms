import isPowerOfTwo from '../leetcode/power-of-two';

describe('isPowerOfTwo()', () => {
  it(`should return false for num = 0`, () => {
    const num = 0;
    const expected = false;
    const actual = isPowerOfTwo(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for num = 1`, () => {
    const num = 1;
    const expected = true;
    const actual = isPowerOfTwo(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for num = 2`, () => {
    const num = 2;
    const expected = true;
    const actual = isPowerOfTwo(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for num = -2`, () => {
    const num = -2;
    const expected = false;
    const actual = isPowerOfTwo(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for num = 16`, () => {
    const num = 16;
    const expected = true;
    const actual = isPowerOfTwo(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for num = 218`, () => {
    const num = 218;
    const expected = false;
    const actual = isPowerOfTwo(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for num = 1000`, () => {
    const num = 1000;
    const expected = false;
    const actual = isPowerOfTwo(num);

    expect(actual).toEqual(expected);
  });

});