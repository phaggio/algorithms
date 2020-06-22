import factorial from '../bootcamp/factorial';


describe(`factorial()`, () => {
  it(`should return null when takes in a non-integer`, () => {
    const num = `test`;
    const expected = null;
    const actual = factorial(num);
    expect(actual).toEqual(expected);
  });

  it(`should return null when takes in a negative integer`, () => {
    const num = -1;
    const expected = null;
    const actual = factorial(num);
    expect(actual).toEqual(expected);
  });

  it(`should return factorial of 0`, () => {
    const num = 0;
    const expected = 1;
    const actual = factorial(num);
    expect(actual).toEqual(expected);
  });

  it(`should return factorial of 3`, () => {
    const num = 3;
    const expected = 6;
    const actual = factorial(num);
    expect(actual).toEqual(expected);
  });

  it(`should return factorial of 7`, () => {
    const num = 7;
    const expected = 5040;
    const actual = factorial(num);
    expect(actual).toEqual(expected);
  });
});