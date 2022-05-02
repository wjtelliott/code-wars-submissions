const mostUsed = require('./mostUsedWords');

describe('Testing 4kyu top 3 words', () => {

    // top_3_words("In a village of La Mancha, the name of which I have no desire to call to
    // mind, there lived not long since one of those gentlemen that keep a lance
    // in the lance-rack, an old buckler, a lean hack, and a greyhound for
    // coursing. An olla of rather more beef than mutton, a salad on most
    // nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
    // on Sundays, made away with three-quarters of his income.")
    // # => ["a", "of", "on"]

    // top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
    // # => ["e", "ddd", "aa"]

    // top_3_words("  //wont won't won't")
    // # => ["won't", "wont"]

    test('testing', () => {
        expect(mostUsed(`In a village of La Mancha, the name of which I have no desire to call to
            mind, there lived not long since one of those gentlemen that keep a lance
            in the lance-rack, an old buckler, a lean hack, and a greyhound for
            coursing. An olla of rather more beef than mutton, a salad on most
            nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
            on Sundays, made away with three-quarters of his income.`)).toStrictEqual(['a', 'of', 'on']);
        expect(mostUsed('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e')).toStrictEqual(['e', 'ddd', 'aa']);
        expect(mostUsed('  //wont won\'t won\'t')).toStrictEqual(['won\'t', 'wont'])
    });
})