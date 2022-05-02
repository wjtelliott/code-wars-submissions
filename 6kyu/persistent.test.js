const persis = require('./persistent');

describe('testing 6kyu persistent', () => {

    // 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
    // 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
    // 4 --> 0 (because 4 is already a one-digit number)

    test('testing', () => {
        expect(persis(39)).toStrictEqual(3);
        expect(persis(999)).toStrictEqual(4);
        expect(persis(4)).toStrictEqual(0);
    });
})