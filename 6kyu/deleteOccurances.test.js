const deleteNths = require('./deleteOccurances');

describe('Delete Occurances', () => {
    test('small arrays', () => {
        expect(deleteNths([1,2,3,1,2,1,2,3], 2)).toStrictEqual([1,2,3,1,2,3]);
        expect(deleteNths([20,37,20,21], 1)).toStrictEqual([20,37,21]);
    });
    test('medium arrays', () => {
        expect(deleteNths([1,2,3,1,2,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 2)).toStrictEqual([1,2,3,1,2,3,4,4]);
        expect(deleteNths([20,37,20,21,21,21,21,21,21,21,21,21,21,42,87,21,20,37,37,37,20,21,37,42,37,20], 1)).toStrictEqual([20,37,21,42,87]);
    });
})