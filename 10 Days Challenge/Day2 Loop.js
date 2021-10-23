/**
 * https://www.hackerrank.com/challenges/js10-loops/problem
 * print the string from the vowels to the consonant
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

/**
 * https://www.hackerrank.com/challenges/js10-switch/problem
 * Day 2: Conditional Statements: Switch
 */

function getLetter(s) {
    let letter;
    // Write your code here
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return 'A';
                break;
            case 'b':
            case 'c':
            case 'd':
            case 'f':
            case 'g':
                return 'B';
                break;
            case 'h':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
            case 'n':
                return 'C';
                break;
            case 'n':
            case 'p':
            case 'q':
            case 'r':
            case 's':
            case 't':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
            case 'z':
                return 'D';
                break;
            default:
                return 'No'
        }
    }
    return letter;
}

//cara dua

function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
            break;
    }
    return letter;
}