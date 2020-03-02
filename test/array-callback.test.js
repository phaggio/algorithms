'use strict';

const arrayCallback = require('../array-callback');

describe(`arrayCallback()`, () => {
    const isEven = num => num % 2 === 0;
    const isOdd = num => num % 2 === 1;
    const greaterThan5 = num => num > 5;
    const equalTo5 = num => num === 5;

    describe('isEven', () => {
        it('should return matches', () => {
            const input = [1, 2, 3];
            const expected = [2];

            expect(arrayCallback(input, isEven)).toEqual(expected);
        });

        it(`should return empty array when there's no match`, () => {
            const input = [1, 3];
            const expected = [];

            expect(arrayCallback(input, isEven)).toEqual(expected);
        });

        it('should return null if takes non-arrays', () => {
            const input = 'test';
            const expected = null;

            expect(arrayCallback(input, isEven)).toEqual(expected);
        });
    });

    describe('isOdd', () => {
        it('should return matches', () => {
            const input = [1, 2, 3];
            const expected = [1, 3];

            expect(arrayCallback(input, isOdd)).toEqual(expected);
        });

        it(`should return empty array when there's no match`, () => {
            const input = [2, 4];
            const expected = [];

            expect(arrayCallback(input, isOdd)).toEqual(expected);
        });

        it('should return null if takes non-arrays', () => {
            const input = 'test';
            const expected = null;

            expect(arrayCallback(input, isOdd)).toEqual(expected);
        });
    });


    describe('greaterThan5', () => {
        it('should return matches', () => {
            const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const expected = [6, 7, 8, 9];

            expect(arrayCallback(input, greaterThan5)).toEqual(expected);
        });

        it(`should return empty array when there's no match`, () => {
            const input = [1, 2, 3, 4, 5];
            const expected = [];

            expect(arrayCallback(input, greaterThan5)).toEqual(expected);
        });

        it('should return null if takes non-arrays', () => {
            const input = 'test';
            const expected = null;

            expect(arrayCallback(input, greaterThan5)).toEqual(expected);
        });
    });

    describe('equalTo5', () => {
        it('should return matches', () => {
            const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const expected = [5];

            expect(arrayCallback(input, equalTo5)).toEqual(expected);
        });

        it(`should return empty array when there's no match`, () => {
            const input = [1, 2, 3, 4];
            const expected = [];

            expect(arrayCallback(input, equalTo5)).toEqual(expected);
        });

        it('should return null if takes non-arrays', () => {
            const input = 'test';
            const expected = null;

            expect(arrayCallback(input, equalTo5)).toEqual(expected);
        });
    });
});