import addBinary from '../leetcode/add-binary';

describe('addBinary()', () => {
  it(`should return "11"`, () => {
    const a = "11"
    const b = "1"
    const expected = "100"
    const actual = addBinary(a, b);

    expect(actual).toEqual(expected);
  });

  it(`should return "10101"`, () => {
    const a = "1010"
    const b = "1011"
    const expected = "10101"
    const actual = addBinary(a, b);

    expect(actual).toEqual(expected);
  });

  it(`should return "1001"`, () => {
    const a = "1000"
    const b = "1"
    const expected = "1001"
    const actual = addBinary(a, b);

    expect(actual).toEqual(expected);
  });

  it(`should return "110"`, () => {
    const a = "11"
    const b = "11"
    const expected = "110"
    const actual = addBinary(a, b);

    expect(actual).toEqual(expected);
  });

  it(`should return "10"`, () => {
    const a = "1"
    const b = "1"
    const expected = "10"
    const actual = addBinary(a, b);

    expect(actual).toEqual(expected);
  });

  it(`should return "1"`, () => {
    const a = "0"
    const b = "1"
    const expected = "1"
    const actual = addBinary(a, b);

    expect(actual).toEqual(expected);
  });

  it(`should return "0"`, () => {
    const a = "0"
    const b = "0"
    const expected = "0"
    const actual = addBinary(a, b);

    expect(actual).toEqual(expected);
  });

});