// Write a JavaScript function to apply Bubble Sort algorithm.

let swapp = (a,b) =>{
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
function BubbleSort(arr) {
    let i, j, temp;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swapp(j, j+1);
            }
        }
    }
    return arr;
}
const arr = [10, 250, 1, 15, 26, 89, 200, 12];
console.log(BubbleSort(arr));
// console.log(arr.sort((a,b) => a-b))

// const arr = ["Banana","Kiwi","Apple","Oreange", "Pinaepal"];
// console.log(arr.sort());