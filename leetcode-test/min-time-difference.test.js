import findMinDifference from '../leetcode/min-time-difference';

describe('findMinDifference()', () => {

  it(`should return 2`, () => {
    const timePoints = ["08:00", "08:59", "09:01", "10:00"];

    const expected = 2;
    const actual = findMinDifference(timePoints);

    expect(actual).toEqual(expected);
  });

  it(`should return 18`, () => {
    const timePoints = ["08:00", "08:59", "10:01", "10:59", "12:40", "12:58", "14:44"];

    const expected = 18;
    const actual = findMinDifference(timePoints);

    expect(actual).toEqual(expected);
  });

  it(`should return 1`, () => {
    const timePoints = ["00:00", "23:59"];

    const expected = 1;
    const actual = findMinDifference(timePoints);

    expect(actual).toEqual(expected);
  });

  it(`should return 0`, () => {
    const timePoints = ["00:00", "00:00"];

    const expected = 0;
    const actual = findMinDifference(timePoints);

    expect(actual).toEqual(expected);
  });

  it(`should return 1`, () => {
    const timePoints = ["00:00", "00:10", "00:01"];

    const expected = 1;
    const actual = findMinDifference(timePoints);

    expect(actual).toEqual(expected);
  });

  it(`should return 5`, () => {
    const timePoints = ["00:00", "00:10", "00:25", "00:40", "01:00", "00:05"];

    const expected = 5;
    const actual = findMinDifference(timePoints);

    expect(actual).toEqual(expected);
  });

  it(`should return 115`, () => {
    const timePoints = ["01:00", "04:10", "06:25", "10:40", "13:00", "23:05"];

    const expected = 115;
    const actual = findMinDifference(timePoints);

    expect(actual).toEqual(expected);
  });

  it(`should return 40`, () => {
    const timePoints = ["08:00", "09:10", "11:25", "06:40", "12:05"];

    const expected = 40;
    const actual = findMinDifference(timePoints);

    expect(actual).toEqual(expected);
  });

  it(`should return 475`, () => {
    const timePoints = ["08:00", "16:00", "23:55"];

    const expected = 475;
    const actual = findMinDifference(timePoints);

    expect(actual).toEqual(expected);
  });

  it(`should return 475`, () => {
    const timePoints = ["07:55", "16:00", "00:00"];

    const expected = 475;
    const actual = findMinDifference(timePoints);

    expect(actual).toEqual(expected);
  });

  it(`should return 475`, () => {
    const timePoints = ["08:05", "16:00", "00:00"];

    const expected = 475;
    const actual = findMinDifference(timePoints);

    expect(actual).toEqual(expected);
  });
});