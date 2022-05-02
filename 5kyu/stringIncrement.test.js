const stringInc = require('./stringIncrement');

describe('Testing 5kyu Sting increment', () => {
    test('testing easy', () => {
        expect(stringInc('foo')).toStrictEqual('foo1');
        expect(stringInc('foobar23')).toStrictEqual('foobar24')
    });
    test('Ltesting harder', () => {
        expect(stringInc('')).toStrictEqual('1');
        expect(stringInc('0003')).toStrictEqual('0004');
        expect(stringInc('fooBAar000001')).toStrictEqual('fooBAar000002');
    });
})