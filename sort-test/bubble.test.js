import bubble from '../sort/bubble';

describe('bubble()', () => {
  it('should return a sorted array', () => {
    const arr = [1, 3, 2, 5, 9, 8, 7, 10, 6, 4];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const actual = bubble(arr);

    expect(actual).toEqual(expected);
  });


  
})