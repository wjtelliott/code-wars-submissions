const arrayDiff = require('./arrayDiff');

describe('Testing 6kyu array diff', () => {
    test('testing', () => {
        expect(arrayDiff([1, 2, 2, 3, 3, 4, 5], [2, 5])).toStrictEqual([1, 3, 3, 4]);
        expect(arrayDiff([5, 5, 5, 6, 3, 2, 6, 5, 7, 7, 8, 20], [5, 20])).toStrictEqual([6, 3, 2, 6, 7, 7, 8]);
        expect(arrayDiff([1],[1])).toStrictEqual([]);
    });
})