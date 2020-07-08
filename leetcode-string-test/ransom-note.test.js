import canConstruct from '../leetcode-string/ransom-note';

describe('canConstruct()', () => {
  it(`should return false for "a", "b"`, () => {
    const ransomNote = 'a';
    const magazine = 'b';
    const expected = false;
    const actual = canConstruct(ransomNote, magazine);
    expect(actual).toEqual(expected);
  });


  it(`should return false for "aa", "ab"`, () => {
    const ransomNote = 'aa';
    const magazine = 'ab';
    const expected = false;
    const actual = canConstruct(ransomNote, magazine);
    expect(actual).toEqual(expected);
  });


  it(`should return true for "aa", "aab"`, () => {
    const ransomNote = 'aa';
    const magazine = 'aab';
    const expected = true;
    const actual = canConstruct(ransomNote, magazine);
    expect(actual).toEqual(expected);
  });


  it(`should return false for "aaa", "aa"`, () => {
    const ransomNote = 'aaa';
    const magazine = 'aa';
    const expected = false;
    const actual = canConstruct(ransomNote, magazine);
    expect(actual).toEqual(expected);
  });


  it(`should return false for "", "aabbccdd"`, () => {
    const ransomNote = '';
    const magazine = 'aabbccdd';
    const expected = true;
    const actual = canConstruct(ransomNote, magazine);
    expect(actual).toEqual(expected);
  });


});