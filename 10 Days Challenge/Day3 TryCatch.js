/**
 * https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */

function reverseString(s) {
    try {
        s = s.split('').reverse().join('')
        return s
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log(s)
    }
}
reverseString('abcd')

/**
 * https://www.hackerrank.com/challenges/js10-throw/problem?h_r=next-challenge&h_v=zen
 * Throw
 */

function isPositive(a) {
    if (a > 0) {
        return 'YES'
    } else if (a === 0) {
        throw new Error("Zero Error")
    } else {
        throw new Error("Negative Error")
    }
}
isPositive(12)