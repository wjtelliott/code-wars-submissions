const areTheySame = require('./areTheySame');

describe('Testing are they the same', () => {
    test('testing', () => {
        expect(areTheySame([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])).toStrictEqual(true);
        expect(areTheySame([121, 144, 19, 161, 19, 144, 19, 11], [134, 14641, 20736, 361, 25921, 361, 20736, 361])).toStrictEqual(false);
        expect(areTheySame([3, 4], [16, 9])).toStrictEqual(true);
    });
})