// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


// Recursive persistence depth check

// Check if we have a strln of 1 and return depth (default 0).
// If not, return this func again, but num is now [tostring(num)] and multiply each digit to get new val. increment depth

const persistence = (num, depth = 0) => `${num}`.length === 1 ? depth : persistence(([...`${num}`]).reduce((total, el) => total * el), depth+1);

module.exports = persistence;