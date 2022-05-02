/**
 * Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
 * Input will always be valid, i.e. no negative integers.
 */

const countSheep = num => {
    let sheepies = [];
    for (let i = 0; i < num; i++, sheepies.push(`${i} sheep...`));
    return sheepies.join('');
}

module.exports = countSheep;