// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


const zero = callback => (!callback) ? 0 : callback.func(callback.val, 0)
const one = callback => (!callback) ? 1 : callback.func(callback.val, 1)
const two = callback => (!callback) ? 2 : callback.func(callback.val, 2)
const three = callback => (!callback) ? 3 : callback.func(callback.val, 3)
const four = callback => (!callback) ? 4 : callback.func(callback.val, 4)
const five = callback => (!callback) ? 5 : callback.func(callback.val, 5)
const six = callback => (!callback) ? 6 : callback.func(callback.val, 6)
const seven = callback => (!callback) ? 7 : callback.func(callback.val, 7)
const eight = callback => (!callback) ? 8 : callback.func(callback.val, 8)
const nine = callback => (!callback) ? 9 : callback.func(callback.val, 9)

const plus = num => { return { func: (num1, num2) => num1 + num2, val: num } }
const minus = num => { return { func: (num1, num2) => num2 - num1, val: num } }
const times = num => { return { func: (num1, num2) => num1 * num2, val: num } }
const dividedBy = num => { return { func: (num1, num2) => Math.floor(num2 / num1), val: num } }

module.exports = {
    zero, one, two, three, four, five, six, seven, eight, nine,
    plus, minus, times, dividedBy
};