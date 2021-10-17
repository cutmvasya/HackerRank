/**
 * https://www.hackerrank.com/challenges/js10-regexp-1/problem?h_r=next-challenge&h_v=zen
 */

function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeiou]).+\1$/

    /*
     * Do not remove the return statement
     */
    console.log(re.test(s));
}
regexVar('ebca')