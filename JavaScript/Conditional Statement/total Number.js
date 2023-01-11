// Write a JavaScript program to sum the multiples of 3 and 5 under 100.

let sum = 0;
for (let x = 1; x <= 100; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);
