'use strict';

const acronymBuilder = require('../acronym-builder');

describe(`acronymBuilder()`, () => {
    it(`should return null if parameter takes a non-string value`, () => {
        const str = 123;
        const expected = null;
        const actual = acronymBuilder(str);

        expect(actual).toEqual(expected);
    });

    it(`should return null if passed nothing to its arg`, () => {
        const expected = null;
        const actual = acronymBuilder();

        expect(actual).toEqual(expected);
    });

    it(`should return acronym of a word`, () => {
        const str = `united`;
        const expected = `U`;
        const actual = acronymBuilder(str);

        expect(actual).toEqual(expected);
    });

    it(`should return acronym of a long string`, () => {
        const str = `new york stock exchange`;
        const expected = `NYSE`;
        const actual = acronymBuilder(str);

        expect(actual).toEqual(expected);
    });

    it(`should return acronym of a string with numeric character in it`, () => {
        const str = `new york stock exchange 2`;
        const expected = `NYSE2`;
        const actual = acronymBuilder(str);

        expect(actual).toEqual(expected);
    })

});