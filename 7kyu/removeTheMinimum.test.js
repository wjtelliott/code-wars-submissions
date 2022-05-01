const removeMinimum = require('./removeTheMinimum');

describe('Testing remove the minimum', () => {
    test('testing', () => {
        expect(removeMinimum([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5])
        expect(removeMinimum([4, 6, 2, 7, 8, 98, 1])).toStrictEqual([4, 6, 2, 7, 8, 98])
        expect(removeMinimum([2, 2, 1, 22, 2, 1])).toStrictEqual([2, 2, 22, 2, 1])
        expect(removeMinimum([2523, 2523, 1312312, 55, 131, 999])).toStrictEqual([2523, 2523, 1312312, 131, 999])
    })
})