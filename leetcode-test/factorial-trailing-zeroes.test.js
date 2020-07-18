import trailingZeroes from '../leetcode/factorial-trailing-zeroes';

describe('trailingZeroes()', () => {
  it(`should return 0 for n = 0`, () => {
    const n = 0;
    const expected = 0;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 for n = 1`, () => {
    const n = 1;
    const expected = 0;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 for n = 3`, () => {
    const n = 3;
    const expected = 0;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 1 for n = 5`, () => {
    const n = 5;
    const expected = 1;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 1 for n = 6`, () => {
    const n = 6;
    const expected = 1;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 1 for n = 8`, () => {
    const n = 8;
    const expected = 1;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 2 for n = 10`, () => {
    const n = 10;
    const expected = 2;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 3 for n = 15`, () => {
    const n = 15;
    const expected = 3;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 4 for n = 20`, () => {
    const n = 20;
    const expected = 4;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 10 for n = 40`, () => {
    const n = 40;
    const expected = 9;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 12 for n = 50`, () => {
    const n = 50;
    const expected = 12;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 24 for n = 100`, () => {
    const n = 100;
    const expected = 24;
    const actual = trailingZeroes(n);

    expect(actual).toEqual(expected);
  });
});