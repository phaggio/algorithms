import isPerfectSquare from '../bootcamp/is-perfect-square';

describe(`isPerfectSquare()`, () => {
  it(`should return false if takes a non-int value`, () => {
    const num = `100`;
    const expected = false;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false if takes a negative number`, () => {
    const num = -100;
    const expected = false;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false if takes the number 0`, () => {
    const num = 0;
    const expected = false;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false if takes a decimal number`, () => {
    const num = 1.44;
    const expected = false;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return false if takes null in arg.`, () => {
    const expected = false;
    const actual = isPerfectSquare();

    expect(actual).toEqual(expected);
  });

  it(`should return true if takes a perfect square number 100`, () => {
    const num = 100;
    const expected = true;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

  it(`should return true if takes a perfect square number 36`, () => {
    const num = 36;
    const expected = true;
    const actual = isPerfectSquare(num);

    expect(actual).toEqual(expected);
  });

});