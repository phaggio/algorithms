import isNumeric from '../bootcamp/is-numeric';

describe(`isNumeric()`, () => {
  it(`should return true if strings is a valid positive number`, () => {
    const str = `123`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if strings is a valid negative number`, () => {
    const str = `-123`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if strings is not a valid number`, () => {
    const str = `test`;
    const expected = false;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if strings isn't a valid number`, () => {
    const str = `123-`;
    const expected = false;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if strings isn't a valid number`, () => {
    const str = `-..`;
    const expected = false;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if strings isn't a valid number`, () => {
    const str = `-+12`;
    const expected = false;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if strings isn't a valid number`, () => {
    const str = `.+123`;
    const expected = false;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if strings is a valid number start with '+' sign`, () => {
    const str = `+123`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if strings is a valid number with decimals`, () => {
    const str = `12.345`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if strings is a valid number less than 1 with decimals`, () => {
    const str = `.345`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if strings is a valid number leading with zero`, () => {
    const str = `0345`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

  it(`should return true if strings is a valid number leading with positive/negative sign and zero`, () => {
    const str = `+0567`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });
  it(`should return true if strings is a valid number leading with positive/negative sign and zero`, () => {
    const str = `-0789`;
    const expected = true;
    const actual = isNumeric(str);

    expect(actual).toEqual(expected);
  });

});