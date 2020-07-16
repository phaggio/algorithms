import longestCommonPrefix from '../leetcode/longest-common-prefix';

describe('longestCommonPrefix()', () => {
  it(`should return 'fl`, () => {
    const strs = ["flower", "flow", "flight"]
    const expected = 'fl';
    const actual = longestCommonPrefix(strs);
    expect(actual).toEqual(expected);
  });


  it(`should return ''`, () => {
    const strs = ["dog", "racecar", "car"]
    const expected = '';
    const actual = longestCommonPrefix(strs);
    expect(actual).toEqual(expected);
  });


  it(`should return 'dd'`, () => {
    const strs = ["ddddog", "ddddog", "dd"]
    const expected = 'dd';
    const actual = longestCommonPrefix(strs);
    expect(actual).toEqual(expected);
  });


  it(`should return ''`, () => {
    const strs = ["abcd", "abc", ""]
    const expected = '';
    const actual = longestCommonPrefix(strs);
    expect(actual).toEqual(expected);
  });


  it(`should return 'abcd'`, () => {
    const strs = ["abcd"]
    const expected = 'abcd';
    const actual = longestCommonPrefix(strs);
    expect(actual).toEqual(expected);
  });

  it(`should return ''`, () => {
    const strs = []
    const expected = '';
    const actual = longestCommonPrefix(strs);
    expect(actual).toEqual(expected);
  });

});