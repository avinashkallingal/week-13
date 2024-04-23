function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const array = [1, 2, 3, 4, 5];
const sum = sumOfArray(array);
console.log("Sum of array elements:", sum); 