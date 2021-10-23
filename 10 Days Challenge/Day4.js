/**
 * Complete the Rectangle function
 * https://www.hackerrank.com/challenges/js10-objects/problem
 * Day 4: Create a Rectangle Object
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;

    this.perimeter = 2 * (this.length + this.width)
    this.area = this.length * this.width
}
Rectangle(4, 5)
console.log(length)
console.log(width)
console.log(perimeter)
console.log(area)