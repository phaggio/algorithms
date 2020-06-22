import fibonacci from '../bootcamp/fibonacci';

describe(`fibonacci()`, () => {
    it(`should return null if takes a non-number value`, () => {
        const num = 'test';
        const expected = null;
        const actual = fibonacci(num);

        expect(actual).toEqual(expected);
    });

    it(`should return null if passes no parameter to its arg`, () => {
        const expected = null;
        const actual = fibonacci();

        expect(actual).toEqual(expected);
    });

    it(`should return null if takes numeric characters in string`, () => {
        const num = '30';
        const expected = null;
        const actual = fibonacci(num);

        expect(actual).toEqual(expected);
    });

    it(`should return an array of fibonacci numbers when takes positive number`, () => {
        const num = 5;
        const expected = [0, 1, 1, 2, 3, 5];
        const actual = fibonacci(num);

        expect(actual).toEqual(expected);
    });

    it(`should return an array of fibonacci numbers when provide number 0`, () => {
        const num = 0;
        const expected = [0];
        const actual = fibonacci(num);

        expect(actual).toEqual(expected);
    });

    it(`should return an array of fibonacci numbers when provide number 1`, () => {
        const num = 1;
        const expected = [0, 1, 1];
        const actual = fibonacci(num);

        expect(actual).toEqual(expected);
    });

    it(`should return null when provide a negative number -1`, () => {
        const num = -1;
        const expected = null;
        const actual = fibonacci(num);

        expect(actual).toEqual(expected);
    });
});