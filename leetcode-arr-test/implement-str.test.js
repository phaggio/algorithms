import strStr from '../leetcode-arr/implement-str';

describe('strStr()', () => {
  it(`should return index of 2 for ('hello', 'll')`, () => {
    const haystack = 'hello';
    const needle = 'll';
    const expected = 2;
    const actual = strStr(haystack, needle);

    expect(actual).toEqual(expected);
  });

  it(`should return index of 4 for ('hello world', 'o')`, () => {
    const haystack = 'hello world';
    const needle = 'o';
    const expected = 4;
    const actual = strStr(haystack, needle);

    expect(actual).toEqual(expected);
  });

  it(`should return index of 2 for ('hhiioolliiooee', 'ii')`, () => {
    const haystack = 'hhiioolliiooee';
    const needle = 'ii';
    const expected = 2;
    const actual = strStr(haystack, needle);

    expect(actual).toEqual(expected);
  });

  it(`should return index of -1 for ('aaaaa', 'bba')`, () => {
    const haystack = 'aaaaa';
    const needle = 'bba';
    const expected = -1;
    const actual = strStr(haystack, needle);

    expect(actual).toEqual(expected);
  });

  it(`should return 0 when needle is empty ('hello', '')`, () => {
    const haystack = 'hello';
    const needle = '';
    const expected = 0;
    const actual = strStr(haystack, needle);

    expect(actual).toEqual(expected);
  });

  it(`should return index of -1 for ('hello world', 'bb')`, () => {
    const haystack = 'hello world';
    const needle = 'bb';
    const expected = -1;
    const actual = strStr(haystack, needle);

    expect(actual).toEqual(expected);
  });

});