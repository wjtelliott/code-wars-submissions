// Write a function that, given a string of text (possibly with punctuation and line-breaks),
// returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned,
// or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]



const trimString = function(str){
  // Is there a better way to organize these special characters?
  const characterTrimList = [' ', '/', '.', '\'', '\\', '#', ':', ',']
  let front = 0, end = str.length;
  
  // Find front / end of string to trim special chars.
  // Special chars inside string will be counted. won't and wont will be separate words
  while (end > front && characterTrimList.indexOf(str[end - 1]) >= 0) --end;
  while (front < end && characterTrimList.indexOf(str[front]) >= 0) ++front;
  
  // trimmed will be the result of trimming the word
  const trimmed = (front > 0 || end < str.length) ? str.substring(front, end) : 
                (characterTrimList.indexOf(str) >= 0 || str === '') ? null : str;
  
  // With this helper func we can add to the hash table or increment its value
  const addToObject = function(obj){
    if (trimmed === null) return;
    if (obj[trimmed] === undefined) obj[trimmed] = 1;
    else obj[trimmed]++;
  }
  
  return {
    andAddToList: addToObject
  }
}

function topThreeWords(text) {
  let obj = {}

  // With helper funcs, this looks a lot cleaner
  text.split(' ').forEach( el => trimString(el.toLowerCase()).andAddToList(obj))

  return Object.entries(obj)
    // Sort
    .sort(([_,a],[__,b]) => b-a)

    // Filter top 3 -> This could be better, we don't need to filter, we just need to get the first 3
    .filter((e, i)=>i < 3 && e)

    // We only want the value
    .map(e=>e[0])
}

module.exports = topThreeWords;