/**
 * Make a program that filters a list of string and returns a list with only your friends name in it.
 * If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
 * Otherwise, you can be sure they're not...
 * 
 * ex input = ['Ryan', 'Kieran', 'Jason', 'Jaz'] => Output: ['Ryan']
 * 
 * The names should be kept in the same order!
 */

const friend = friends => friends.filter(el => el.length === 4);

module.exports = friend;