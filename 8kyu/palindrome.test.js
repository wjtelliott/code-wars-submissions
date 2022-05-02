const palin = require('./palindrome');

describe('Testing palindrome', () => {
    test('testing', () => {
        expect(palin('aulua')).toStrictEqual(true);
        expect(palin('zxYyxz')).toStrictEqual(true);
        expect(palin('llkkkjjjjhhhsfas')).toStrictEqual(false);
        expect(palin('poPoporeERopOpop')).toStrictEqual(true);
    })
})