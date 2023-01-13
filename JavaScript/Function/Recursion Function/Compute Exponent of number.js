// Write a JavaScript program to compute the exponent of a number.
let exponent = (x, n) => {
    if (n === 0)
        return 1;
    else
        return x * exponent(x, n - 1);
}
console.log(exponent(4, 3));