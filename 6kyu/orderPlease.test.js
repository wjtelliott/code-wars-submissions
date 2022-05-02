const orders = require('./orderPlease');

describe('testing 6kyu orders please', () => {
    test('testing', () => {
        expect(orders('thi1s is2 3a tes4t')).toStrictEqual('thi1s is2 3a tes4t');
        expect(orders('is2 3a tes4t thi1s')).toStrictEqual('thi1s is2 3a tes4t');
        expect(orders('make5 sense1 shouldnt3 why2 this4 okay6?')).toStrictEqual('sense1 why2 shouldnt3 this4 make5 okay6?');
    });
})