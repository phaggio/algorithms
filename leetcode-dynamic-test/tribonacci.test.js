import tribonacci from '../leetcode-dynamic/tribonacci';

describe('tribonacci()', () => {
  it(
    `should return 0 for input of 0
    `, () => {
    const n = 0;

    const expected = 0;
    const actual = tribonacci(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 1 for input of 1
    `, () => {
    const n = 1;

    const expected = 1;
    const actual = tribonacci(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 1 for input of 2
    `, () => {
    const n = 2;

    const expected = 1;
    const actual = tribonacci(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 2 for input of 3
    `, () => {
    const n = 3;

    const expected = 2;
    const actual = tribonacci(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 4 for input of 4
    `, () => {
    const n = 4;

    const expected = 4;
    const actual = tribonacci(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 7 for input of 5
    `, () => {
    const n = 5;

    const expected = 7;
    const actual = tribonacci(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 13 for input of 6
    `, () => {
    const n = 6;

    const expected = 13;
    const actual = tribonacci(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 24 for input of 7
    `, () => {
    const n = 7;

    const expected = 24;
    const actual = tribonacci(n);

    expect(actual).toEqual(expected);
  });


});