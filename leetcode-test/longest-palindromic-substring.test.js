import longestPalindrome from '../leetcode/longest-palindromic-substring';

describe('longestPalindrome()', () => {
  it(`should return 'aba' for 'aba'`, () => {
    const s = 'aba';
    const expected = 'aba'
    const actual = longestPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return 'bab' for 'babead'`, () => {
    const s = 'babead';
    const expected = 'bab'
    const actual = longestPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return 'efgfe' for 'abcdefgfehijklmnop'`, () => {
    const s = 'abcdefgfehijklmnop';
    const expected = 'efgfe'
    const actual = longestPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return 'efgfe' for 'abcdabcdabcdefgfehijklmnop'`, () => {
    const s = 'abcdabcdabcdefgfehijklmnop';
    const expected = 'efgfe'
    const actual = longestPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return 'a' for 'abc'`, () => {
    const s = 'abc';
    const expected = 'a'
    const actual = longestPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return 'a' for 'a'`, () => {
    const s = 'a';
    const expected = 'a';
    const actual = longestPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return '' for ''`, () => {
    const s = '';
    const expected = ''
    const actual = longestPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return 'mnopponm' for 'abcdefgfeabcdmnopponmabcd'`, () => {
    const s = 'abcdefgfeabcdmnopponmabcd';
    const expected = 'mnopponm'
    const actual = longestPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return 'efghihgfe' for 'abcdefghihgfeabcdmnopponmabcd'`, () => {
    const s = 'abcdefghihgfeabcdmnopponmabcd';
    const expected = 'efghihgfe'
    const actual = longestPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return 'ghihgfefghihg' for 'abcdefghihgfefghihgabcdabcd'`, () => {
    const s = 'abcdefghihgfefghihgabcdabcd';
    const expected = 'ghihgfefghihg'
    const actual = longestPalindrome(s);

    expect(actual).toEqual(expected);
  });
});