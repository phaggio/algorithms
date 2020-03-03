'use strict';

const characterCount = require('../character-count');

describe(`characterCount()`, () => {
    it(`should return null when takes in a non-string value`, () => {
        const expected = null;
        const actual = characterCount();
        expect(actual).toEqual(expected);
    });

    it(`should return null when takes in a non-string value`, () => {
        const str = ['a', 'b', 'c'];
        const expected = null;
        const actual = characterCount(str);
        expect(actual).toEqual(expected);
    });

    it(`should return null when takes in a non-string value`, () => {
        const str = 1000;
        const expected = null;
        const actual = characterCount(str);
        expect(actual).toEqual(expected);
    });

    it(`should return null when takes in an empty string value`, () => {
        const str = '';
        const expected = null;
        const actual = characterCount(str);
        expect(actual).toEqual(expected);
    });

    it(`should return a object with character counts when takes in a string value`, () => {
        const str = 'aabbccddefgh'
        const expected = {
            'a': 2,
            'b': 2,
            'c': 2,
            'd': 2,
            'e': 1,
            'f': 1,
            'g': 1,
            'h': 1
        }
        const actual = characterCount(str);
        expect(actual).toEqual(expected);
    });
});