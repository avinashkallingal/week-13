function binary(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}
function search(arr, target, leftIndex, rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (leftIndex > rightIndex) {
        return 1;
    }
    if (arr[middleIndex] == target) {
        return middleIndex;
    }
    if (arr[middleIndex] > target) {
        rightIndex = middleIndex - 1
        return search(arr, target, leftIndex, rightIndex)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}
const ans = binary([-5, 2, 5, 8, 10], -5)
console.log(ans)