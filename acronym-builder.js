'use strict';

// Write a function that accepts a string and returns an acronym for the given string
// return null if no string provided or takes a non-string value

const acronymBuilder = (str) => {
    if(!str || str === undefined || typeof str !== 'string') {
        return null;
    } else {
        const strArr = str.split(' ');
        let acronym = '';
        for (const str of strArr) {
            let firstLetter = str[0].toUpperCase();
            acronym += firstLetter;
        }
        return acronym;
    }
};

module.exports = acronymBuilder