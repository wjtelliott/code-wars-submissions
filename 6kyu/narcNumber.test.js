const narcNum = require('./narcNumber');

describe('Narcissistic Number', () => {
    test('testing truthers', () => {
        expect(narcNum(7)).toStrictEqual(true);
        expect(narcNum(153)).toStrictEqual(true);
    });
    test('testing falsers', () => {
        expect(narcNum(18)).toStrictEqual(false);
        expect(narcNum(9999999)).toStrictEqual(false);
        expect(narcNum(767)).toStrictEqual(false);
    });
})