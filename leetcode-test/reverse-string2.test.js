import reverseStr from '../leetcode/reverse-string2';

describe('reverseStr()', () => {

  it(`should return "bacdfeg" for "abcdefg", k = 2`, () => {
    const s = "abcdefg";
    const k = 2
    const expected = "bacdfeg";
    const actual = reverseStr(s, k);

    expect(actual).toEqual(expected);
  });

  it(`should return 'cbadefhg' for 'abcdefgh'`, () => {
    const s = 'abcdefgh';
    const k = 3
    const expected = 'cbadefhg';
    const actual = reverseStr(s, k);

    expect(actual).toEqual(expected);
  });

  it(`should return 'dcbaefghlkji' for 'abcdefghijkl'`, () => {
    const s = 'abcdefghijkl';
    const k = 4
    const expected = 'dcbaefghlkji';
    const actual = reverseStr(s, k);

    expect(actual).toEqual(expected);
  });

  it(`should return 'abcdefgh' for 'abcdefgh'`, () => {
    const s = 'abcdefgh';
    const k = 1
    const expected = 'abcdefgh';
    const actual = reverseStr(s, k);

    expect(actual).toEqual(expected);
  });

  it(`should return 'cba' for 'abc'`, () => {
    const s = 'abc';
    const k = 3;
    const expected = 'cba';
    const actual = reverseStr(s, k);

    expect(actual).toEqual(expected);
  });

  it(`should return 'dcbaefg' for 'abcdefg'`, () => {
    const s = 'abcdefg';
    const k = 4;
    const expected = 'dcbaefg';
    const actual = reverseStr(s, k);

    expect(actual).toEqual(expected);
  });

  it(`should return 'cba' for 'abc'`, () => {
    const s = 'abc';
    const k = 4;
    const expected = 'cba';
    const actual = reverseStr(s, k);

    expect(actual).toEqual(expected);
  });


});