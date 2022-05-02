/**
 * The main idea is to count all the occurring characters in a string.
 * If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
 * 
 * What if the string is empty? Then the result should be empty object literal, {}.
 * The string will never include special characters, only [a-Z]
 */

function count (s) {
    let charCounts = {}
    s.split('').forEach( el => el !== ' ' ? charCounts[el] = charCounts[el] ? charCounts[el] + 1 : 1 : null)
    /**
     * For readability:
     * s.split('')
     *  .forEach( character => {
     *      if (character === ' ') return;
     *      if (charCounts[character]) {
     *          charCouns[character] += 1;
     *          return;
     *      }
     *      charCounter[character] = 1;
     *  })
     */
    return charCounts;
}
module.exports = count;