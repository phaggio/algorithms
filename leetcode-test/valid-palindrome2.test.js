import validPalindrome from '../leetcode/valid-palindrome2';

describe('validPalindrome()', () => {

  it(`should return true for 'aba' `, () => {
    const s = 'aba'

    const expected = true;
    const actual = validPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 'abca' `, () => {
    const s = 'abca'

    const expected = true;
    const actual = validPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 'abcbda' `, () => {
    const s = 'abcbda'

    const expected = true;
    const actual = validPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return false for 'fabae' `, () => {
    const s = 'fabae'

    const expected = false;
    const actual = validPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 'abccbba' `, () => {
    const s = 'abccbba'

    const expected = true;
    const actual = validPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 'ba' `, () => {
    const s = 'ba'

    const expected = true;
    const actual = validPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 'a' `, () => {
    const s = 'a'

    const expected = true;
    const actual = validPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return false for 'abc' `, () => {
    const s = 'abc'

    const expected = false;
    const actual = validPalindrome(s);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 'cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu' `, () => {
    const s = "cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu"

    const expected = true;
    const actual = validPalindrome(s);

    expect(actual).toEqual(expected);
  });

});