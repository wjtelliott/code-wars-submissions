const twoLowestSum = require('./sumTwoLowest');

describe('Testing 7kyu two lows sum', () => {
    test('testing', () => {
        expect(twoLowestSum([1, 2, 2, 3, 3, 4, 5])).toStrictEqual(3);
        expect(twoLowestSum([5, 5, 5, 6, 3, 2, 6, 5, 7, 7, 8, 20])).toStrictEqual(5);
        expect(twoLowestSum([1, 1, 8, 9])).toStrictEqual(2);
    });
})