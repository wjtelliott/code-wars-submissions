/**
 * Write a function that checks if a given string (case insensitive) is a palindrome.
 */

function isPalindrome(x) {
    /**
     * This first solution works, but is mpotentially a lot of work for larger data.
     * The below solution should be better for performance. We will only every iterate for half
     * and we test each side at the same time.
     */
    // return [...x].reverse().join('') === x;

    for (let start = 0, end = x.length - 1; start < end; start++, end--)
      if (x[start].toLowerCase() !== x[end].toLowerCase()) return false
    return true
}

module.exports = isPalindrome;