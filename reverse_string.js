function reverseArray(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array is reversed
    } else {
        const temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        reverseArray(arr.slice(1, -1)); // Recursively call reverseArray with updated array
        return arr;
    }
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log("Original array:", array);
const reversedArray = reverseArray(array);
console.log("Reversed array:", reversedArray);
