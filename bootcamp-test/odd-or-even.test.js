import oddOrEven from '../bootcamp/odd-or-even';

describe('oddOrEven(num)', () => {
    it(`should not be an empty value`, () => {
        // Arrange
        const num;
        const cb = () => oddOrEven(num)
        const err = new Error(
            "Expected a non-empty value."
        );
        // Assert
        expect(cb).toThrowError(err);
    });

    it(`should return 'odd' if the number is odd`, () => {
        const num = 3;
        const expected = `odd`;
        const actual = oddOrEven(num);

        expect(actual).toEqual(expected);
    });

    it(`should return 'even' if the number is even`, () => {
        const num = 4;
        const expected = `even`;
        const actual = oddOrEven(num);

        expect(actual).toEqual(expected);
    });
});
