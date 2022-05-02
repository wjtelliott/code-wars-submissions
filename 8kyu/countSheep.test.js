const sheepies = require('./countSheep');

describe('Testing counting sheep', () => {
    test('testing', () => {
        expect(sheepies(3)).toStrictEqual('1 sheep...2 sheep...3 sheep...');
        expect(sheepies(6)).toStrictEqual('1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...6 sheep...');
    })
})