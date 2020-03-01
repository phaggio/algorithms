'use strict';

// write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.
// return the integer if it is less than 1
// return null for everything else


const accumulate = (max) => {
    if (max === undefined || max === null || isNaN(max)) {
        return null;
    } else if (max < 1) {
        return max;
    } else {
        let sum = 0;
        for (let i = 1; i <= max; ++i) {
            sum += i;
        };
        return sum;
    };
};

module.exports = accumulate