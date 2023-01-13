// Write a JavaScript program to sort a list of elements using Quick sort.

function quickSort(origArray) {
    if (origArray.length <= 1) {
        return origArray;
    } 
    else {
        let left = [];
        let right = [];
        let newArray = [];
        let pivot = origArray.pop();
        let length = origArray.length;
        for (let i = 0; i < length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }
        return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
}
const myArray = [3, 0, 2, 5, -1, 4, 1];
console.log("Original array: " + myArray);
let sortedArray = quickSort(myArray);
console.log("Sorted array: " + sortedArray);
