import countDown from '../bootcamp/countdown';

describe(`countDown()`, () => {
  it(`should log numbers from 'num' down to 1`, () => {
    const num = 5;
    const expected = [5, 4, 3, 2, 1];
    const actual = countDown(num);

  })

});
