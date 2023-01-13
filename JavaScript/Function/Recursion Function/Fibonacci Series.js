// Write a JavaScript program to get the first n Fibonacci numbers.

Fiboonacci = (n) =>{
    if(n === 1)
        return [0, 1];
    else
    {
        let ser =  Fiboonacci(n-1);
        ser.push(ser[ser.length-1] + ser[ser.length-2]);
        return ser;
    }
}

console.log(Fiboonacci(10));