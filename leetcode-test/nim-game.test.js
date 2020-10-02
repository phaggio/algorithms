import canWinNim from '../leetcode/nim-game';

describe('canWinNim()', () => {
  it(`should return true`, () => {
    const num = 1
    const expected = true
    const actual = canWinNim(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true`, () => {
    const num = 2
    const expected = true
    const actual = canWinNim(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true`, () => {
    const num = 3
    const expected = true
    const actual = canWinNim(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true`, () => {
    const num = 5
    const expected = true
    const actual = canWinNim(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true`, () => {
    const num = 7
    const expected = true
    const actual = canWinNim(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false`, () => {
    const num = 8
    const expected = false
    const actual = canWinNim(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false`, () => {
    const num = 12
    const expected = false
    const actual = canWinNim(num);

    expect(actual).toEqual(expected);
  });

})