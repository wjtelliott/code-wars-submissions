const regexPin = require('./regexPin');

describe('Testing 7kyu regex pin', () => {
    test('testing', () => {
        // Test will always have 4 or more digits as string
        expect(regexPin('f333')).toStrictEqual(false);
        expect(regexPin('12tG23')).toStrictEqual(false);
        expect(regexPin('1234')).toStrictEqual(true);
        expect(regexPin('123455')).toStrictEqual(true);
        expect(regexPin('12345')).toStrictEqual(false);
    });
})