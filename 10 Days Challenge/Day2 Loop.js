/**
 * https://www.hackerrank.com/challenges/js10-loops/problem
 * print the string from the vowels to the consonant
 * @param {STRING} s 
 */
function vowelsAndConsonants(s) {
    let vowels = []
    let consonan = []
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c == 'a' || c == 'i' || c == 'u' || c == 'e' || c == 'o') {
            vowels.push(c)
        } else {
            consonan.push(c)
        }

    }
    let ss = vowels.concat(consonan)
    ss.forEach(e => console.log(e))
}
vowelsAndConsonants('javascriptloops')

/**
 * https://www.hackerrank.com/challenges/js10-if-else/problem
 * Conditional statement: If-Else
 */

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) {
        grade = 'A'
    } else if (score > 20 && score <= 25) {
        grade = 'B'
    } else if (score > 15 && score <= 20) {
        grade = 'C'
    } else if (score > 10 && score <= 15) {
        grade = 'D'
    } else if (score > 5 && score <= 10) {
        grade = 'E'
    } else if (score > 0 && score <= 5) {
        grade = 'F'
    } else {
        return "Nothing"
    }
    return grade;
}
getGrade(15)