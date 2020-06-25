import palindrome from '../bootcamp/palindrome';

describe('palindrome()', () => {
  it(`should return false if takes an empty value`, () => {
    const str = '';
    const expected = false;
    const actual = palindrome(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if takes a non-palindrome string 'nice'`, () => {
    const str = 'nice';
    const expected = false;
    const actual = palindrome(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if takes a palindrome 'noon'`, () => {
    const str = 'noon';
    const expected = true;
    const actual = palindrome(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if takes a palindrome 'racecar'`, () => {
    const str = 'racecar';
    const expected = true;
    const actual = palindrome(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if takes a non-palindrome string 'test'`, () => {
    const str = 'test';
    const expected = false;
    const actual = palindrome(str);

    expect(actual).toEqual(expected);
  });

});