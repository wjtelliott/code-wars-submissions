const countChars = require('./countCharacter');

describe('Count Characters', () => {
    test('testing easy', () => {
        expect(countChars("LOL", 'l')).toStrictEqual(2);
        expect(countChars('zabcdefghijklmnopqrstuvwxyz', 'z')).toStrictEqual(2);
    });
})