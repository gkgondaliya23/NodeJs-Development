// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

let a = 96; //First number
let b = 482;  //Second number 
let gcd;
while (a != b) {
    if (a > b) {
        a = a - b;
    }
    else {
        b = b - a;
    }
}
gcd = a;
console.log(gcd);
