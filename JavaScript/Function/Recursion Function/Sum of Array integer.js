// Write a JavaScript program to compute the sum of an array of integers.
ArraySum = (arr) =>{
    if(arr.length === 1)
        return arr[0];
    else
        return arr.pop() + ArraySum(arr);
}
const a =[1,10,12,15,20];
console.log(ArraySum(a));