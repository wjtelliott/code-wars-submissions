/**
 * The marketing team is spending way too much time typing in hashtags.
 * Let's help them with our own Hashtag Generator!
 * 
 * Here's the deal:
 * - It MUST start with a hashtag (#)
 * - All words must have their first letter capitalized, and the rest of the word should be lowercase
 * - If final result is longer than 140 Characters, return false
 * - If input or result is an empty string, return false
 *
 */

module.exports = 

function generateHashtag (str) {
    if (!str.trim() || str.replace(/\s/g, '').length > 139) return false;
    return `#${
        str
            .split(' ')
            .map(el => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase())
            .join('')
    }`;
};