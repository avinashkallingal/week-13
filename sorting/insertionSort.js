function insertionSort(arr) {
 
    for (let i = 1; i < arr.length; i++) {
        let insertValue = arr[i];
        let j = i - 1;
        while (insertValue < arr[j] && j >= 0) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = insertValue
    }

}

const arr = [5, 8, 4, 2, 9]
insertionSort(arr)
console.log(arr)
