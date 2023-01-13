// JavaScript function that reverse a number.

function reverseNumber(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverseNumber(123))