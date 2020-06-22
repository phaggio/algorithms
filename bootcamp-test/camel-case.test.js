'use strict';

const camelCase = require('../camel-case');

describe(`camelCase()`, () => {
    it(`should return null when pass nothing in arg`, () => {
        const expected = null;
        const actual = camelCase();
        expected(actual).toEqual(expected);
    });

    it(`should return a lowercase word when pass one word in arg`, () => {
        const word = 'Test';
        const expected = 'test';
        const actual = camelCase(word);
        expect(actual).toEqual(expected);
    });

    it(`should return a lowercase word when pass a uppercase word in arg`, () => {
        const word = 'TEST';
        const expected = 'test';
        const actual = camelCase(word);
        expect(actual).toEqual(expected);
    });

    it(`should return a camelcase string when pass a string of words in arg`, () => {
        const word = 'Test One Two Three';
        const expected = 'testOneTwoThree';
        const actual = camelCase(word);
        expect(actual).toEqual(expected);
    });

    it(`should return a lowercase word when pass one word in arg`, () => {
        const word = 'test one two three';
        const expected = 'testOneTwoThree';
        const actual = camelCase(word);
        expect(actual).toEqual(expected);
    });

});