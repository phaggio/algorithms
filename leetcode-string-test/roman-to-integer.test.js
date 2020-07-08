import romanToInt from '../leetcode-string/roman-to-integer';

describe('romanToInt()', () => {
  it(`should return int of 1 for input 'I'`, () => {
    const s = 'I';
    const expected = 1;
    const actual = romanToInt(s);
    expect(actual).toEqual(expected);
  });


  it(`should return int of 2 for input 'II'`, () => {
    const s = 'II';
    const expected = 2;
    const actual = romanToInt(s);
    expect(actual).toEqual(expected);
  });


  it(`should return int of 3 for input 'III'`, () => {
    const s = 'III';
    const expected = 3;
    const actual = romanToInt(s);
    expect(actual).toEqual(expected);
  });


  it(`should return int of 4 for input 'IV'`, () => {
    const s = 'IV';
    const expected = 4;
    const actual = romanToInt(s);
    expect(actual).toEqual(expected);
  });


  it(`should return int of 5 for input 'V'`, () => {
    const s = 'V';
    const expected = 5;
    const actual = romanToInt(s);
    expect(actual).toEqual(expected);
  });


  it(`should return int of 3 for input 'VI'`, () => {
    const s = 'VI';
    const expected = 6;
    const actual = romanToInt(s);
    expect(actual).toEqual(expected);
  });


  it(`should return int of 58 for input 'LVIII'`, () => {
    const s = 'LVIII';
    const expected = 58;
    const actual = romanToInt(s);
    expect(actual).toEqual(expected);
  });


  it(`should return int of 1994 for input 'MCMXCIV'`, () => {
    const s = 'MCMXCIV';
    const expected = 1994;
    const actual = romanToInt(s);
    expect(actual).toEqual(expected);
  });


});