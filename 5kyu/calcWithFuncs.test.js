const { one, two, three, four, five, six, seven, eight, nine, zero,
        plus, minus, times, dividedBy } = require('./calcWithFuncs');

describe('Testing 5kyu calc with funcs', () => {

    // seven(times(five())); // must return 35
    // four(plus(nine())); // must return 13
    // eight(minus(three())); // must return 5
    // six(dividedBy(two())); // must return 3

    test('testing', () => {
        expect(seven(times(five()))).toStrictEqual(35);
        expect(four(plus(nine()))).toStrictEqual(13);
        expect(eight(minus(three()))).toStrictEqual(5);
        expect(six(dividedBy(two()))).toStrictEqual(3);
    });
})