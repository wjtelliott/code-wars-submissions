// The goal of this exercise is to convert a string to a new string where each character in the new string is "("\
// if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages.
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// There's always a one-liner
const duplicateEncode = word => [...word].map(e => word.match(new RegExp(`[${e}]`, 'ig')).length > 1 ? ')' : '(').join('')

//More readable
// const duplicateEncode = word => {
//     return [...word]
//         .map( el => {
//             const pattern = new RegExp(`[${el}]`, 'ig');
//             return word.match(pattern).length > 1 ? ')' : '('
//         }).join('')
// }
// Prettier.io:
// const duplicateEncode = (word) =>
//   [...word]
//     .map((e) => (word.match(new RegExp(`[${e}]`, "ig")).length > 1 ? ")" : "("))
//     .join("");

module.exports = duplicateEncode;