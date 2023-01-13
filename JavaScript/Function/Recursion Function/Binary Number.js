// Write a JavaScript program to convert Binary number (positive) to Decimal using recursion. 

const test = (n) => {
    if (n === 0 || n === 1) 
    {
      return String(n)
    }
    return test(Math.floor(n / 2)) + String(n % 2)
  }
  console.log(test(1))
  console.log(test(7))
  console.log(test(15))
  console.log(test(5))
  