function binarySearchRecursion(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return "not found"
    }
    let middleIndex=Math.floor((leftIndex+rightIndex)/2)
    if(arr[middleIndex]==target){
        return middleIndex
    }
    if(arr[middleIndex]>target){
        return search(arr,index,leftIndex,middleIndex-1)
    }else{
        return search(arr,target,middleIndex+1,rightIndex)
    }

}
const binarySearch=binarySearchRecursion([-5,2,6,10,15],10)
console.log(binarySearch)