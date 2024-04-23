function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (arr[middleIndex] == target) {
            return middleIndex;
        }
        if(arr[middleIndex]>target){
            rightIndex=middleIndex-1
        }
        if(arr[middleIndex]<target){
            leftIndex=middleIndex+1
        }
    }
    return "not found"
}
console.log(binarySearch([-5, 2, 6, 10, 15], 10))