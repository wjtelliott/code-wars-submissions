const strSum = require('./sumStringsBig');

describe('Testing 4kyu sum strings', () => {

    test('testing small', () => {
        expect(strSum('1', '1')).toStrictEqual('2');
        expect(strSum('100', '100')).toStrictEqual('200');
    });
    test('testing big', () => {
        expect(strSum('98732498723487298734242424242234', '585858565635465365482736874682763487')).toStrictEqual('585957298134188852781471117107005721')
    });
})