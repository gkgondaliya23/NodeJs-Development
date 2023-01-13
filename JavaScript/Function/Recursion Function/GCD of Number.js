// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

let GCD = (a,b) =>{
    if (! b)
        return a;
    return GCD(b, a % b);
}
console.log(GCD(15,175));