import detectCapitalUse from '../leetcode/detect-capital';

describe('detectCapitalUse()', () => {
  it(`should return true for 'USA' `, () => {
    const word = 'USA';
    const expected = true;
    const actual = detectCapitalUse(word);

    expect(actual).toEqual(expected);
  });

  it(`should return false for 'FlaG' `, () => {
    const word = 'FlaG';
    const expected = false;
    const actual = detectCapitalUse(word);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 'leetcode' `, () => {
    const word = 'leetcode';
    const expected = true;
    const actual = detectCapitalUse(word);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 'US' `, () => {
    const word = 'US';
    const expected = true;
    const actual = detectCapitalUse(word);

    expect(actual).toEqual(expected);
  });

  it(`should return false for 'LeetCode' `, () => {
    const word = 'LeetCode';
    const expected = false;
    const actual = detectCapitalUse(word);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 'A' `, () => {
    const word = 'A';
    const expected = true;
    const actual = detectCapitalUse(word);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 'a' `, () => {
    const word = 'a';
    const expected = true;
    const actual = detectCapitalUse(word);

    expect(actual).toEqual(expected);
  });
});