const encode = require('./duplicateEncoder');

describe('Testing duplicate encoding', () => {
    test('testing', () => {
        expect(encode('din')).toStrictEqual('(((');
        expect(encode('diin')).toStrictEqual('())(');
        expect(encode('recede')).toStrictEqual("()()()");
        expect(encode('(( @')).toStrictEqual("))((");
    });
})