// JavaScript function which accepts an argument and returns the type.

// function dataType(value)
// {
//     let dtype = [Function, RegExp, Number, Object, Boolean, String];
//     let i,len;

//     if(typeof value === "function" || typeof value === "object")
//     {
//         for(i = 0, len=dtype.length ; i <len; i++)
//         {
//             if(value instanceof dataType[i])
//                 return dtype[i];
//         }
//     }
//     return typeof value;
// }
// // console.log(dataType(12));
// // console.log(dataType('12'));
// // console.log(dataType(NaN));
// console.log(dataType(true));