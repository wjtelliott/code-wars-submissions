const friends = require('./friendfoe');

describe('Testing friendfoe.js', () => {
    test('testing', () => {
        expect(friends(['Ryan', 'Joe', 'Jaz', 'Jesse'])).toStrictEqual(['Ryan'])
        expect(friends(['Jack', 'Sabrina', 'Will', 'Pa', 'Rachael'])).toStrictEqual(['Jack', 'Will'])
    })
})