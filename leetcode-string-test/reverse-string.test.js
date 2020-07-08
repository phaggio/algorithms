import reverseString from '../leetcode-string/reverse-string';

describe('reverseString()', () => {
  it(`should return ["o","l","l","e","h"]`, () => {
    const s = ["h", "e", "l", "l", "o"];
    const expected = ["o", "l", "l", "e", "h"];
    const actual = reverseString(s);

    expect(actual).toEqual(expected);
  });


  it(`should return ["o","l","l","e","h"]`, () => {
    const s = ["H", "a", "n", "n", "a", "h"];
    const expected = ["h", "a", "n", "n", "a", "H"];
    const actual = reverseString(s);

    expect(actual).toEqual(expected);
  });


  it(`should return ["t","s","e","t"," ","a"," ","s","i"," ","s","i","h","T"]`, () => {
    const s = ["T", "h", "i", "s", " ", "i", "s", " ", "a", " ", "t", "e", "s", "t"]
    const expected = ["t", "s", "e", "t", " ", "a", " ", "s", "i", " ", "s", "i", "h", "T"]
    const actual = reverseString(s);

    expect(actual).toEqual(expected);
  });


  it(`should return []`, () => {
    const s = [];
    const expected = [];
    const actual = reverseString(s);

    expect(actual).toEqual(expected);
  });

  it(`should return ["a"]`, () => {
    const s = ["a"];
    const expected = ["a"];
    const actual = reverseString(s);

    expect(actual).toEqual(expected);
  });

});