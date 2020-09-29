import fibonacci from '../recursion/fibonacci';

describe('fibonacci()', () => {
  it('should return fibonacci number of 0 for n = 0', () => {
    const n = 0;
    const map = {0: 1, 1: 1};
    const expected = 0;
    const actual = fibonacci(n, map);

    expect(actual).toEqual(expected);
  });

  it('should return fibonacci number of 1 for n = 1', () => {
    const n = 1;
    const map = {0: 1, 1: 1};
    const expected = 1;
    const actual = fibonacci(n, map);

    expect(actual).toEqual(expected);
  });

  it('should return fibonacci number of 1 for n = 2', () => {
    const n = 2;
    const map = {0: 1, 1: 1};
    const expected = 1;
    const actual = fibonacci(n, map);

    expect(actual).toEqual(expected);
  });

  it('should return fibonacci number of 2 for n = 3', () => {
    const n = 3;
    const map = {0: 1, 1: 1};
    const expected = 2;
    const actual = fibonacci(n, map);

    expect(actual).toEqual(expected);
  });

  it('should return fibonacci number of 3 for n = 4', () => {
    const n = 4;
    const map = {0: 1, 1: 1};
    const expected = 3;
    const actual = fibonacci(n, map);

    expect(actual).toEqual(expected);
  });

  it('should return fibonacci number of 5 for n = 5', () => {
    const n = 5;
    const map = {0: 1, 1: 1};
    const expected = 5;
    const actual = fibonacci(n, map);

    expect(actual).toEqual(expected);
  });

  it('should return fibonacci number of 8 for n = 6', () => {
    const n = 6;
    const map = {0: 1, 1: 1};
    const expected = 8;
    const actual = fibonacci(n, map);

    expect(actual).toEqual(expected);
  });

  it('should return fibonacci number of 13 for n = 7', () => {
    const n = 7;
    const map = {0: 1, 1: 1};
    const expected = 13;
    const actual = fibonacci(n, map);

    expect(actual).toEqual(expected);
  });

  it('should return fibonacci number of 21 for n = 8', () => {
    const n = 8;
    const map = {0: 1, 1: 1};
    const expected = 21;
    const actual = fibonacci(n, map);

    expect(actual).toEqual(expected);
  });

  it('should return fibonacci number of 34 for n = 9', () => {
    const n = 9;
    const map = {0: 1, 1: 1};
    const expected = 34;
    const actual = fibonacci(n, map);

    expect(actual).toEqual(expected);
  });

})