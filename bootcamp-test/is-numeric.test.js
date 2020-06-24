import isNumeric from '../bootcamp/is-numeric';

describe(`isNumeric()`, () => {
  it(`should return true if string is a valid positive number with no sign or decimal`, () => {
    const str = `123`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if string is a valid negative number with minus sign in first place`, () => {
    const str = `-123`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if string contains alphabet char`, () => {
    const str = `test`;
    const expected = false;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if string has plus/minus not in first place`, () => {
    const str = `123-`;
    const expected = false;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if string has no number char in it`, () => {
    const str = `-.`;
    const expected = false;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if string has both plus and minus sign`, () => {
    const str = `-+12`;
    const expected = false;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if string has decimal comes before plus/minus sign`, () => {
    const str = `.+123`;
    const expected = false;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if string is a valid number start with '+' sign`, () => {
    const str = `+123`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if string is a valid number with decimals`, () => {
    const str = `12.345`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if string is a valid number less one decimal in first place`, () => {
    const str = `.345`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if string is a valid number leading with zero`, () => {
    const str = `0345`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if string is a valid number leading with plus sign and zero`, () => {
    const str = `+0567`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if string is a valid number leading with minus sign and zero`, () => {
    const str = `-0789`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if string of '' or null`, () => {
    const str = '';
    const expected = false;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });
});