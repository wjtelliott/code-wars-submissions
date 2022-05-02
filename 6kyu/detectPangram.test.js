const isPangram = require('./detectPangram');

describe('Testing 6kyu detect pangram', () => {
    test('testing', () => {
        expect(isPangram('the quick brown fox jumps over the lazy dog')).toStrictEqual(true);
        expect(isPangram('This is not a pangram. :(')).toStrictEqual(false);
    });
})