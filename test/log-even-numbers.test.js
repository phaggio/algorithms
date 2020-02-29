'use strict';

const logEvenNums = require(`../log-even-numbers`);

describe('logEvenNums(num)', () => {
    it(`should not be an empty string`, () => {
        // Arrange
        let num;
        const cb = () => logEvenNums(num)
        const err = new Error(
            "Expected a non empty value."
        );
        // Assert
        expect(cb).toThrowError(err);
    });
});
