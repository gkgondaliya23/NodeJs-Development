/* Write a JavaScript program to find the armstrong numbers of 3 digits.
An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. 
For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.     */
function armstrongNumber() {
    for (let i = 1; i < 10; ++i) {
        for (let j = 0; j < 10; ++j) {
            for (let k = 0; k < 10; ++k) {
                let pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
                let plus = (i * 100 + j * 10 + k);
                if (pow == plus) {
                    console.log(pow);
                }
            }
        }
    }
}
armstrongNumber();
