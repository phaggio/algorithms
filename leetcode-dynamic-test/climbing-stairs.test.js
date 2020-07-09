import climbStairs from '../leetcode-dynamic/climbing-stairs';


describe('climbStairs()', () => {
  it(
    `should return 1 for input of 1
    `, () => {
    const n = 1;

    const expected = 1;
    const actual = climbStairs(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 2 for input of 2
    `, () => {
    const n = 2;

    const expected = 2;
    const actual = climbStairs(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 3 for input of 3
    `, () => {
    const n = 3;

    const expected = 3;
    const actual = climbStairs(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 5 for input of 4
    `, () => {
    const n = 4;

    const expected = 5;
    const actual = climbStairs(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 8 for input of 5
    `, () => {
    const n = 5;

    const expected = 8;
    const actual = climbStairs(n);

    expect(actual).toEqual(expected);
  });

  it(
    `should return 13 for input of 6
    `, () => {
    const n = 6;

    const expected = 13;
    const actual = climbStairs(n);

    expect(actual).toEqual(expected);
  });

});