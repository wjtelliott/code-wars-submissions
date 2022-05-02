const wave = require('./mexicanWave');

describe('Testing 6kyu wave', () => {
    test('testing', () => {
        expect(wave('hello')).toStrictEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
        expect(wave('wave')).toStrictEqual(["Wave", "wAve", "waVe", "wavE"]);
        expect(wave('wave wave')).toStrictEqual(["Wave wave", "wAve wave", "waVe wave", "wavE wave", 'wave Wave', 'wave wAve', 'wave waVe', 'wave wavE']);
    });
})