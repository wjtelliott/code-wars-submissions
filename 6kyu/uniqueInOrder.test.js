const uniqueOrder = require('./uniqueInOrder');

describe('Testing 6kyu unique in order', () => {
    test('testing string', () => {
        expect(uniqueOrder('abcdhhiijjkkllllllmnopaabavV')).toStrictEqual(['a', 'b', 'c', 'd', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'a', 'b', 'a', 'v', 'V']);
        expect(uniqueOrder('hello world, my name is william')).toStrictEqual(['h', 'e', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', ',', ' ', 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'w', 'i', 'l', 'i', 'a', 'm']);
    });
    test('testing for arrays', () => {
        expect(uniqueOrder([1, 3, 3, 4, 2, 2, 2, 4, 3, 4, 4, 4, 4, 6])).toStrictEqual([1, 3, 4, 2, 4, 3, 4, 6]);
    });
    test('testing for mixed arrays', () => {
        expect(uniqueOrder([1, 1, 'asd', 'hello', 'hello', 1, 1, 3, 'hello', 'asd', 9, 9, 1])).toStrictEqual([1, 'asd', 'hello', 1, 3, 'hello', 'asd', 9, 1])
    });
})