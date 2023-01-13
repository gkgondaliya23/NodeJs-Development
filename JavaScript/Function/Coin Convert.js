// JavaScript function to convert an amount to coins.

// function conAmount(amt, coins) {
//     if (amt === 0)
//         return [];
//     else {
//         if (amt >= coins[0]) {
//             left = (amt - coins[0]);
//             return [coins[0]].concat(conAmount(left, coins));
//         }
//         else
//         {
//             coins.shift();
//             return conAmount(amt, coins);
//         }
//     }
// }
// const coin = [500,200,100,50,20,10];
// console.log(conAmount(2010,coin));