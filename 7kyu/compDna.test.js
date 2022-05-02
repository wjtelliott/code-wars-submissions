const compDNA = require('./compDna');

// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

describe('Testing 7kyu comp dna', () => {
    test('testing', () => {
        expect(compDNA([])).toStrictEqual('');
        expect(compDNA(['A', 'T', 'G', 'C'])).toStrictEqual('TACG');
        expect(compDNA(['G', 'T', 'A', 'T'])).toStrictEqual('CATA');
        expect(compDNA(['A', 'A', 'A', 'A'])).toStrictEqual('TTTT');
    });
})