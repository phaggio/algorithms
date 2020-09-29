import quickselect from '../sort/quickselect';

describe('quickselect()', () => {
  it('should return the lowest value in the array', () => {
    const arr = [5, 4, 3, 2, 1];
    const expected = 1
    const actual = quickselect(0, arr, 0, arr.length - 1);

    expect(actual).toEqual(expected);
  });

  it('should return the lowest value in the array', () => {
    const arr = [8, 9, 10, 11, 10, 6, 5, 8, 9, 17];
    const expected = 5
    const actual = quickselect(0, arr, 0, arr.length - 1);

    expect(actual).toEqual(expected);
  });

  it('should return the third lowest value in the array', () => {
    const arr = [8, 9, 10, 11, 10, 6, 5, 8, 9, 17, 14, 15, 20, 22, 19];
    const expected = 8
    const actual = quickselect(2, arr, 0, arr.length - 1);

    expect(actual).toEqual(expected);
  });

  it('should return the second lowest value in the array', () => {
    const arr = [8, 9, 10, 11, 10, 6, 5, 8, 9, 17, 14, 15, 20, 22, 19];
    const expected = 6
    const actual = quickselect(1, arr, 0, arr.length - 1);

    expect(actual).toEqual(expected);
  });

})