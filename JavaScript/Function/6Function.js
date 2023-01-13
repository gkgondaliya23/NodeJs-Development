// function in javascript
/*
    Type of Function
    1. Named Function  -> normal function 
    2. anonymous function   -> no name function
    3. Rest parameters in function
    4. Default parameter in function
    5. Optional parameter in function
    6. Generator
    7. Consturctor function
    8. IIFE (Immidiate Invokable Function Expression)
*/

// function test(param1, param2,param3, param4)
// {
//     console.log(`i am learning ${param2} at ${param1} `)
// }
// let param1 = "skillqode"
// let param2 = "nodejs"
// // test(param1,param2)  // function called
// test(param1)  // function called


// arrow function

// let myFunction = (param1, param2)=>
// {
//         console.log(`i am learmning ${param2} at ${param1} `)
// }
// let param1 = "skillqode"
// let param2 = "nodejs"
// myFunction(param1,param2)

// let newfun= (a,b)=> a+b     // only one statement not required return and block scope
// console.log(newfun(10,20))


// function Maxnumber(a, b) {
//     console.log("Maximum nuber is: " + (a > b ? a : b));
// }
// Maxnumber(10, 20);


// Array pass in function
// function DisArray(arr)
// {
//     // for (let i = 0; i < arr.length; i++) {
//     //     console.log(`${arr[i]}`);
//     // }
//         console.log(`${arr}`);
// }
// const arr = [1,15,20,5,25,10];
// DisArray(arr);

// let DisArr = (arr) => console.log(`${arr}`);    // using arrow funtion
// const arr = [1,15,20,5,25,10];
// DisArr(arr);




// callback function

// function test()
// {
//     return 10;
// }

// let fun = (param1)=>{
//     // console.log(param1())
//     return param1()
// }
// console.log(fun(test))



// let a=10,b = 20
// function sum(a,b)
// {
//     return a+b
// }
// let fun = (param1)=>{
//     // console.log(param1)
//     // console.log(param1())
//     return param1
// }
// console.log(fun(sum(a,b)))


// function Test()
// {
//     console.log("Hello World...");
// }
// let fun =(param1) =>
// {
//     param1();
//     // console.log(param1());
//     // return param1();
// } 
//  fun(Test);
// console.log(fun(Test));


// function Mul(a,b)
// {
//     return a*b;
// }
// let Myfun = (param1) =>
// {
//     // console.log(param1(10,20));
//     return param1;
// }
// Myfun(Mul);
// console.log(Myfun(Mul(10,20)));


// let Myfun = (param1) =>
// {
//     // console.log(param1(10,20));
//     return param1(100,20);
// }
// // Myfun(Mul);
// console.log(Myfun((a,b)=> a*b));



// recursive function total 1 to n

// function totalSum(n)
// {
//     if(n<1)
//         return 0;
//     else
//         return n + totalSum(n-1);
// }
// let fun = (test)=>
// {
//     console.log(test);
// }
// fun(totalSum(10));


// Factorial number using recursive function

// function factorial(n)
// {
//     if(n<1)
//         return 1;
//     else
//         return n * factorial(n-1);
// }
// let fun = (test)=>{
//     //  console.log(test(5));
//      return test(5);
// }
// console.log(fun(factorial));



// let Square = (a) => a*a;
// let fun = (test) => test(10);
// console.log(fun(Square));



// function one()
// {
//     return two
// }
// function two()
// {
//     return three;
// }
// function three()
// {
//     return "Hello How r u?"
// }

// console.log(one()()())

// IIFE (Immidiate Invokable Function Expression)

// ( function () {
//   let x = "Hello!!";  // I will invoke myself
//    console.log(x);
// })();


// console.log(this);  // this -> current object
// window.document.querySelector

// function Generator => A generator can pause midway and then continues from where it paused.
// function* Power(i)
// {
//     yield Math.pow(i,0);
//     yield Math.pow(i,1);
//     yield Math.pow(i,2);
// }
// let result = Power(10);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);


// Rest parameter in Function