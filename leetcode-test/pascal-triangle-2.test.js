import generate from '../leetcode/pascal-triangle-2';

describe('generate()', () => {
  it(`should return [1] for 0`, () => {
    const num = 0;
    const expected = [1];
    const actual = generate(num);

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 1] for 1`, () => {
    const num = 1;
    const expected = [1, 1];
    const actual = generate(num);

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 2, 1] for 2`, () => {
    const num = 2;
    const expected = [1, 2, 1];
    const actual = generate(num);

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 3, 3, 1]] for 3`, () => {
    const num = 3;
    const expected = [1, 3, 3, 1];
    const actual = generate(num);

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 4, 6, 4, 1] for 4`, () => {
    const num = 4;
    const expected = [1, 4, 6, 4, 1];
    const actual = generate(num);

    expect(actual).toEqual(expected);
  });

  it(`should return [1, 5, 10, 10, 5, 1] for 5`, () => {
    const num = 5;
    const expected = [1, 5, 10, 10, 5, 1];
    const actual = generate(num);

    expect(actual).toEqual(expected);
  });

});