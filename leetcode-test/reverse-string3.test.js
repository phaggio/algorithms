import reverseWords from '../leetcode/reverse-string3';

describe('reverseWords()', () => {

  it(`should return "s'tel ekat edocteel tsetnoc" for "let's take leetcode test"`, () => {
    const s = "let's take leetcode test";

    const expected = "s'tel ekat edocteel tset";
    const actual = reverseWords(s);

    expect(actual).toEqual(expected);
  });

  it(`should return "siht" for "this"`, () => {
    const s = "this";

    const expected = "siht";
    const actual = reverseWords(s);

    expect(actual).toEqual(expected);
  });

  it(`should return "racecar" for "racecar"`, () => {
    const s = "racecar";

    const expected = "racecar";
    const actual = reverseWords(s);

    expect(actual).toEqual(expected);
  });

  it(`should return "a" for "a"`, () => {
    const s = "a";

    const expected = "a";
    const actual = reverseWords(s);

    expect(actual).toEqual(expected);
  });

  it(`should return "a aa aaa" for "a aa aaa"`, () => {
    const s = "a aa aaa";

    const expected = "a aa aaa";
    const actual = reverseWords(s);

    expect(actual).toEqual(expected);
  });

});