const titleCase = require('./titleCase');

describe('Testing title case', () => {
    test('testing', () => {
        expect(titleCase('a clash of KINGS', 'a an the of')).toStrictEqual('A Clash of Kings');
        expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toStrictEqual('The Wind in the Willows');
    });
    test('testing for null minors', () => {
        expect(titleCase('the quick brown fox')).toStrictEqual('The Quick Brown Fox');
    })
})