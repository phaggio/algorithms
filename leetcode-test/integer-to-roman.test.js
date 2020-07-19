import intToRoman from '../leetcode/integer-to-roman';

describe('intToRoman()', () => {
  it(`should return 'III' for 3`, () => {
    const num = 3;
    const expected = 'III';
    const actual = intToRoman(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 'IV' for 4`, () => {
    const num = 4;
    const expected = 'IV';
    const actual = intToRoman(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 'IX' for 9`, () => {
    const num = 9;
    const expected = 'IX';
    const actual = intToRoman(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 'LVIII' for 58`, () => {
    const num = 58;
    const expected = 'LVIII';
    const actual = intToRoman(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 'MCCCLI' for 1351`, () => {
    const num = 1351;
    const expected = 'MCCCLI';
    const actual = intToRoman(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 'MCCCXCIX' for 1399`, () => {
    const num = 1399;
    const expected = 'MCCCXCIX';
    const actual = intToRoman(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 'MCMXCIV' for 1994`, () => {
    const num = 1994;
    const expected = 'MCMXCIV';
    const actual = intToRoman(num);

    expect(actual).toEqual(expected);
  });

  it(`should return 'MMMI' for 3001`, () => {
    const num = 3001;
    const expected = 'MMMI';
    const actual = intToRoman(num);

    expect(actual).toEqual(expected);
  });
});