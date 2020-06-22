import dayOfTheWeek from '../bootcamp/day-of-the-week';

describe(`dayOfTheWeek()`, () => {
  it(`should output 'Monday' with input of 1`, () => {
    const int = 1;
    const expected = `Monday`;
    const actual = dayOfTheWeek(int);

    expect(actual).toEqual(expected);
  });

  it(`should output 'Tuesday' with input of 2`, () => {
    const int = 2;
    const expected = `Tuesday`;
    const actual = dayOfTheWeek(int);

    expect(actual).toEqual(expected);
  });

  it(`should output 'Wednesday' with input of 3`, () => {
    const int = 3;
    const expected = `Wednesday`;
    const actual = dayOfTheWeek(int);

    expect(actual).toEqual(expected);
  });

  it(`should output undefined when input is greater than 7`, () => {
    const int = 8;
    const expected = undefined;
    const actual = dayOfTheWeek(int);

    expect(actual).toEqual(expected);
  });

  it(`should output undefined with input is less than 1`, () => {
    const int = -1;
    const expected = undefined;
    const actual = dayOfTheWeek(int);

    expect(actual).toEqual(expected);
  });

  it(`should output undefined with input is null`, () => {
    const int = null;
    const expected = undefined;
    const actual = dayOfTheWeek(int);

    expect(actual).toEqual(expected);
  });

  it(`should output undefined with input is null`, () => {
    const expected = undefined;
    const actual = dayOfTheWeek();

    expect(actual).toEqual(expected);
  });

  it(`should output undefined with input is non-integer`, () => {
    const int = `test`;
    const expected = undefined;
    const actual = dayOfTheWeek(int);

    expect(actual).toEqual(expected);
  });
});