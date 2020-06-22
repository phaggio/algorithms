'use strict';

const oddOrEven = require('../odd-or-even');

describe('oddOrEven(num)', () => {
    it(`should not be an empty value`, () => {
        // Arrange
        let num;
        const cb = () => oddOrEven(num)
        const err = new Error(
            "Expected a non-empty value."
        );
        // Assert
        expect(cb).toThrowError(err);
    });
});
