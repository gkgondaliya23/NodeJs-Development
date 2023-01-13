// Write a JavaScript program to check whether a number is even or not.

function EvenNum(number) {
    if (number < 0) {
        number = Math.abs(number);
    }
    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    }
    else {
        number = number - 2;
        return EvenNum(number);
    }
}
console.log(EvenNum(234)); //true
console.log(EvenNum(-45)); // false
console.log(EvenNum(65)); // false
