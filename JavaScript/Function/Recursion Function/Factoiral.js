// Write a JavaScript program to calculate the factorial of a number.
function fact(n)
{
    if(n === 1)
        return 1;
    else 
        return n * fact(n-1);
}
console.log(fact(5));