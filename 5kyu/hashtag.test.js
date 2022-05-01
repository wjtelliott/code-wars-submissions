const hashTags = require('./hashtag');

describe('Testing 5kyu Hashtag Generator', () => {
    test('Testing For Easy', () => {
        expect(hashTags('Hello this is a Test')).toStrictEqual('#HelloThisIsATest');
        expect(hashTags('    YOU  ARE     AMAZING           ')).toStrictEqual('#YouAreAmazing')
    });
    test('Longer than 140 and empty', () => {
        expect(hashTags('What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')).toStrictEqual(false);
        expect(hashTags('')).toStrictEqual(false);
        expect(hashTags('               ')).toStrictEqual(false);
    });
})