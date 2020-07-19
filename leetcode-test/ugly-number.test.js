import isUgly from '../leetcode/ugly-number';

describe('isUgly()', () => {

  it(`should return false for num = 0`, () => {
    const num = 0;
    const expected = false;
    const actual = isUgly(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for num = 1`, () => {
    const num = 1;
    const expected = true;
    const actual = isUgly(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for num = 6`, () => {
    const num = 6;
    const expected = true;
    const actual = isUgly(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for num = 8`, () => {
    const num = 8;
    const expected = true;
    const actual = isUgly(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for num = 14`, () => {
    const num = 14;
    const expected = false;
    const actual = isUgly(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for num = 212`, () => {
    const num = 212;
    const expected = false;
    const actual = isUgly(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for num = -12`, () => {
    const num = -12;
    const expected = false;
    const actual = isUgly(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for num = -2`, () => {
    const num = -2;
    const expected = false;
    const actual = isUgly(num);

    expect(actual).toEqual(expected);
  });


});