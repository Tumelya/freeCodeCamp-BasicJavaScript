/*Remember that arrays have zero-based indexing, 
which means the last index of the array is length - 1. 
Our condition for this loop is i < arr.length, 
which stops the loop when i is equal to length. */

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
    console.log(myArr[i]);
}
console.log("Total: " + total);