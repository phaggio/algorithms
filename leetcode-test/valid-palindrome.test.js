import isPalindrome from '../leetcode/valid-palindrome';

describe('isPalindrome()', () => {

  it(`should return true`, () => {
    const s = "A man, a plan, a canal: Panama"
    const expected = true;
    const actual = isPalindrome(s);

    expect(actual).toEqual(expected);
  });


  it(`should return false`, () => {
    const s = "race a car"
    const expected = false;
    const actual = isPalindrome(s);

    expect(actual).toEqual(expected);
  });


  it(`should return true`, () => {
    const s = ""
    const expected = true;
    const actual = isPalindrome(s);

    expect(actual).toEqual(expected);
  });


  it(`should return true`, () => {
    const s = "a"
    const expected = true;
    const actual = isPalindrome(s);

    expect(actual).toEqual(expected);
  });


  it(`should return false`, () => {
    const s = "A man, a plane, a canal: Panama"
    const expected = false;
    const actual = isPalindrome(s);

    expect(actual).toEqual(expected);
  });


  it(`should return false`, () => {
    const s = "$%^&*()"
    const expected = true;
    const actual = isPalindrome(s);

    expect(actual).toEqual(expected);
  });


  it(`should return false`, () => {
    const s = "!@#0P$%^"
    const expected = false;
    const actual = isPalindrome(s);

    expect(actual).toEqual(expected);
  });


  it(`should return true`, () => {
    const s = "@#0PP0#@"
    const expected = true;
    const actual = isPalindrome(s);

    expect(actual).toEqual(expected);
  });


});