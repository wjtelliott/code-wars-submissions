// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

const reformatIndex = (str, len) => {
    // We can use this helper func to make 'foo001' to equal 'foo002' rather than 'foo2'
    let stringIndexFormatted = Number(str) + 1
    while (stringIndexFormatted.toString().length < len)
      stringIndexFormatted = '0' + stringIndexFormatted.toString();
    return stringIndexFormatted.toString();
}
  
  
function incrementString (strng) {
    // Check strng is valid
    if (!strng) return '1';
    
    // Check if input is just a number, make sure we reformat
    if (!isNaN(strng)) return reformatIndex(strng, strng.toString().length)
    
    // Get string group contents
    const [ fullString, stringContent, stringIndex ] = strng.toString().match(/([a-z]+)(\d+)?/i) 
    
    // If no index, add 1
    if (!stringIndex) return `${stringContent}1`
    
    // Format index and return
    let stringIndexFormatted = reformatIndex(stringIndex, stringIndex.length)
    return `${stringContent}${stringIndexFormatted}`
}

module.exports = incrementString;