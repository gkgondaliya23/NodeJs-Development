// Write a JavaScript program that accept two integers and display the larger.
let x = 20, y = 50;
// console.log("Larger Number is: "+(x>y?x:y));


let largeNum = (a, b) => (a > b ? a : b);
console.log(largeNum(x, y));