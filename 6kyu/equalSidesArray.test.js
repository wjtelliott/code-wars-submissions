const equalSides = require('./equalSidesArray');

describe('Equal sides array', () => {
    test('testing passers', () => {
        expect(equalSides([1, 2, 3, 4, 3, 2, 1])).toStrictEqual(3);
        expect(equalSides([1, 100, 50, -51, 1, 1])).toStrictEqual(1);
        expect(equalSides([20, 10, -80, 10, 10, 15, 35])).toStrictEqual(0);
    });
    test('testing failers', () => {
        expect(equalSides([4444, 1, 1, 1])).toStrictEqual(-1);
        expect(equalSides([909, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 92])).toStrictEqual(-1);
        expect(equalSides([9, 1])).toStrictEqual(-1);
    });
})