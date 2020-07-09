import countPrimes from '../leetcode/count-prime';

describe('countPrimes()', () => {
  it(`should return 4 for n = 10`, () => {
    const n = 10;
    const expected = 4;
    const actual = countPrimes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 25 for n = 100`, () => {
    const n = 100;
    const expected = 25;
    const actual = countPrimes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 for n = 1`, () => {
    const n = 1;
    const expected = 0;
    const actual = countPrimes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 for n = 0`, () => {
    const n = 0;
    const expected = 0;
    const actual = countPrimes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 62 for n = 299`, () => {
    const n = 299;
    const expected = 62;
    const actual = countPrimes(n);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 for n = -10`, () => {
    const n = -10;
    const expected = 0;
    const actual = countPrimes(n);

    expect(actual).toEqual(expected);
  });

});