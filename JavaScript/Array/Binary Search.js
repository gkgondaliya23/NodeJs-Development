// Write a function for searching JavaScript arrays with a binary search. 
// function binarySearch(arr, val) {
//     let mid = Math.floor(arr.length / 2);
//     if (arr[mid] === val)
//         return mid + 1;
//     else if (arr.length === 1)
//         return null;
//     else if (arr[mid] < val) {
//         let newArr = arr.slice(mid + 1);
//         let res = binarySearch(newArr, val);
//         if (res === null)
//             return null;
//         else
//             return mid + 1 + res;
//     }
//     else {
//         let arr1 = arr.slice(0, mid);
//         return binarySearch(arr1, val);
//     }
// }
// const arr = [1, 2, 10, 15, 19, 20, 23, 25, 29, 30, 35, 38, 41, 47, 49];
// console.log(binarySearch(arr, 150));