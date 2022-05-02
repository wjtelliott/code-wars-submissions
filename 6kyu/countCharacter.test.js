const countChars = require('./countCharacter');

describe('Testing counting characters', () => {
    test('testing', () => {
        expect(countChars('lmnop')).toStrictEqual({l:1,m:1,n:1,o:1,p:1});
        expect(countChars('william')).toStrictEqual({w:1,i:2,l:2,a:1,m:1});
        expect(countChars('iliketocode')).toStrictEqual({i:2,l:1,k:1,e:2,t:1,o:2,c:1,d:1});
    });
    test('testing empty & case-sensitive', () => {
        expect(countChars('')).toStrictEqual({});
        expect(countChars('ILikeToCode')).toStrictEqual({I:1,L:1,i:1,k:1,e:2,T:1,o:2,C:1,d:1});
    });
    test('spaces should not be counted', () => {
        expect(countChars(' i')).toStrictEqual({i:1});
    });
})