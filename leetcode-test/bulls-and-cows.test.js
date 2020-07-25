import getHint from '../leetcode/bulls-and-cows';

describe('getHint()', () => {

  it(`should return hint '1A1B' `, () => {
    const secret = '1123';
    const guess = '0111';

    const expected = '1A1B';
    const actual = getHint(secret, guess);

    expect(actual).toEqual(expected);
  });


  it(`should return hint '1A3B' `, () => {
    const secret = '1807';
    const guess = '7810';

    const expected = '1A3B';
    const actual = getHint(secret, guess);

    expect(actual).toEqual(expected);
  });


  it(`should return hint '2A2B' `, () => {
    const secret = '123456';
    const guess = '233445';

    const expected = '2A2B';
    const actual = getHint(secret, guess);

    expect(actual).toEqual(expected);
  });


  it(`should return hint '2A1B' `, () => {
    const secret = '113355';
    const guess = '233445';

    const expected = '2A1B';
    const actual = getHint(secret, guess);

    expect(actual).toEqual(expected);
  });


  it(`should return hint '2A4B' `, () => {
    const secret = '11000022';
    const guess = '00119922';

    const expected = '2A4B';
    const actual = getHint(secret, guess);

    expect(actual).toEqual(expected);
  });
});