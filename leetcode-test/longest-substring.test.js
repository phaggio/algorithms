import lengthOfLongestSubstring from '../leetcode/longest-substring';

describe('lengthOfLongestSubstring()', () => {

  it(`should return 0 for ""`, () => {
    const str = '';
    const expected = 0;
    const actual = lengthOfLongestSubstring(str);

    expect(actual).toEqual(expected);
  });

  it(`should return 1 for "a"`, () => {
    const str = 'a';
    const expected = 1;
    const actual = lengthOfLongestSubstring(str);

    expect(actual).toEqual(expected);
  });

  it(`should return 7 for "abcdaefg"`, () => {
    const str = 'abcdaefg';
    const expected = 7;
    const actual = lengthOfLongestSubstring(str);

    expect(actual).toEqual(expected);
  });


  it(`should return 7 for "abcdabefg"`, () => {
    const str = 'abcdabefg';
    const expected = 7;
    const actual = lengthOfLongestSubstring(str);

    expect(actual).toEqual(expected);
  });


  it(`should return 6 for "abccabdaefg"`, () => {
    const str = 'abccabdaefg';
    const expected = 6;
    const actual = lengthOfLongestSubstring(str);

    expect(actual).toEqual(expected);
  });


  it(`should return 5 for "abcabcdccabcde"`, () => {
    const str = 'abcabcdccabcde';
    const expected = 5;
    const actual = lengthOfLongestSubstring(str);

    expect(actual).toEqual(expected);
  });

});