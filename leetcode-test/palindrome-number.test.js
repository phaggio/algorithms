import isPalindrome from '../leetcode/palindrome-number';

describe('isPalindrome()', () => {
  it(`should return true for 121`, () => {
    const num = 121;
    const expected = true;
    const actual = isPalindrome(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false for -121`, () => {
    const num = -121;
    const expected = false;
    const actual = isPalindrome(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 310213`, () => {
    const num = 310213;
    const expected = false;
    const actual = isPalindrome(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true for 0`, () => {
    const num = 0;
    const expected = true;
    const actual = isPalindrome(num);

    expect(actual).toEqual(expected);
  });

});