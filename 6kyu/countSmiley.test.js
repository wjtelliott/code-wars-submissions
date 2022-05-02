const countSmiles = require('./countSmiley');

describe('Testing 6kyu count Smiles', () => {
    test('testing', () => {
        expect(countSmiles([';)', ':(', ':~D', ':_D', ';D', ';-('])).toStrictEqual(3);
        expect(countSmiles([';)', ':)', ':D', ':-D', ';~D', ';-)'])).toStrictEqual(6);
    });
})