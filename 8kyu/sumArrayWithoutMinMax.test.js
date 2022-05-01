const sumArray = require('./sumArrayWithoutMinMax');

describe('Testing sum without min & max', () => {
    test('testing', () => {
        expect(sumArray([6, 2, 1, 8, 10])).toStrictEqual(16);
        expect(sumArray([1, 1, 11, 2, 3])).toStrictEqual(6);
        expect(sumArray([1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual(6);
    })
})