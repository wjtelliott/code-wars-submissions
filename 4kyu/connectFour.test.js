const whoIsWinner = require('./connectFour')

describe("Basic tests", function(){

    test('Yellow winner', () => {
        expect(whoIsWinner(["C_Yellow",
            "E_Red",
            "G_Yellow",
            "B_Red",
            "D_Yellow",
            "B_Red",
            "B_Yellow",
            "G_Red",
            "C_Yellow",
            "C_Red",
            "D_Yellow",
            "F_Red",
            "E_Yellow",
            "A_Red",
            "A_Yellow",
            "G_Red",
            "A_Yellow",
            "F_Red",
            "F_Yellow",
            "D_Red",
            "B_Yellow",
            "E_Red",
            "D_Yellow",
            "A_Red",
            "G_Yellow",
            "D_Red",
            "D_Yellow",
            "C_Red"])).toStrictEqual('Yellow')
    });

    test('Red winner', () => {
        expect(whoIsWinner(["A_Yellow",
            "B_Red",
            "B_Yellow",
            "C_Red",
            "G_Yellow",
            "C_Red",
            "C_Yellow",
            "D_Red",
            "G_Yellow",
            "D_Red",
            "G_Yellow",
            "D_Red",
            "F_Yellow",
            "E_Red",
            "D_Yellow"])).toStrictEqual('Red')
    });

    test('Draw', () => {
        expect(whoIsWinner([ "A_Red",
            "B_Yellow",
            "A_Red",
            "E_Yellow",
            "F_Red",
            "G_Yellow"])).toStrictEqual('Draw')
    });
});