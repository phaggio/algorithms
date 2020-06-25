import isPangram from '../bootcamp/pangram';

describe('pangram()', () => {
  it(`should return false if takes a non-pangram str 'test'`, () => {
    const str = 'test';
    const expected = false;
    const actual = isPangram(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if takes a non-pangram str 'JavaScript is the best'`, () => {
    const str = 'JavaScript is the best';
    const expected = false;
    const actual = isPangram(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if takes a non-pangram str 'Five hexing wizard bots jump quickly'`, () => {
    const str = 'Five hexing wizard bots jump quickly';
    const expected = true;
    const actual = isPangram(str);

    expect(actual).toEqual(expected);
  });

  it(`should return false if takes a non-pangram str 'Watch Jeopardy, Alex Trebek’s fun TV quiz game'`, () => {
    const str = 'Watch Jeopardy, Alex Trebek’s fun TV quiz game';
    const expected = true;
    const actual = isPangram(str);

    expect(actual).toEqual(expected);
  });


});